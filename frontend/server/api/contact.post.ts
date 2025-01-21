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
        secure: true,
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

const filePath = join(process.cwd(), 'public/expierence_economy_expentura.pdf');

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

        // Read and compile the HTML template
        const templatePath = join(process.cwd(), 'public/email_templates/whitepaper_download.html');
        const htmlTemplateContent = readFileSync(templatePath, 'utf8');
        const handlebarsTemplate = handlebars.compile(htmlTemplateContent);
        const htmlContent = handlebarsTemplate({ firstName, lastName });

        // Send email to the recipient
        await transporter.sendMail({
            from: `Vincent from Expentura <${config.MAILUSER}>`,
            to: body.email,
            subject: 'Your Experience Economy Report Request',
            html: htmlContent,
            attachments: [
                {
                    filename: 'experience_economy_expentura.pdf',
                    path: filePath,
                },
            ],
        });

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
