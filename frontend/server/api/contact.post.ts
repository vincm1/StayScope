import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import { readFileSync } from 'fs';
import { join } from 'path';

const config = useRuntimeConfig();

// Create the transporter configuration
const createTransporter = () => {
    const transportOptions = {
        host: config.MAILHOST,
        port: config.MAILPORT,
        secure: true, // Use secure connection
        auth: {
            user: config.MAILUSER,
            pass: config.MAILPASSWORD,
        },
        logger: true, // Enable logging
    };

    // Add development-specific TLS options
    if (process.env.NODE_ENV === 'development') {
        transportOptions.tls = {
            rejectUnauthorized: false,
            ciphers: "SSLv3",
        };
    }

    return nodemailer.createTransport(transportOptions);
};

// File path for the PDF attachment
const filePath = process.env.NODE_ENV === 'development'
    ? join(process.cwd(), 'public/experience_economy_expentura_s.pdf') // Local
    : `${config.public.BASE_URL}/experience_economy_expentura_s.pdf`; // Static file URL in production

const transporter = createTransporter();

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Validate required fields
        if (!body.firstname || !body.email) {
            throw new Error('Missing required fields: firstname or email');
        }

        // Extract data from the request body
        const firstName = body.firstname.trim();
        const lastName = body.lastname ? body.lastname.trim() : '';
        const hotelName = body.hotelname ? body.hotelname.trim() : '';
        const numHotels = body.numhotels || 0;

        // Handle email template for dynamic content
        const htmlTemplateContent = process.env.NODE_ENV === 'development'
            ? readFileSync(join(process.cwd(), 'public/email_templates/whitepaper_download.html'), 'utf8') // Local
            : await fetch(`${config.public.BASE_URL}/email_templates/whitepaper_download.html`).then(res => res.text()); // Static in production

        const handlebarsTemplate = handlebars.compile(htmlTemplateContent);
        const htmlContent = handlebarsTemplate({ firstName, lastName });
        
           

        // Send notification email to admin
        await transporter.sendMail({
            from: `Vincent from Expentura <${config.MAILUSER}>`,
            to: config.MAILUSER,
            subject: `Whitepaper Requested by ${firstName}`,
            html: `
                <p>${firstName} ${lastName} from Hotel:</p>
                <p><strong>${hotelName}</strong> with Hotels: ${numHotels}</p>
                <p>Requested the whitepaper.</p>
            `,
        });

        return {
            success: true,
            message: 'Emails sent successfully',
            code: 200,
        };

    } catch (error) {
        console.error('Error sending email:', error.message);

        // Send a proper error response
        sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: error.message || 'An error occurred while sending the email',
            })
        );
    }
});
