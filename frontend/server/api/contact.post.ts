import nodemailer from 'nodemailer';

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

const transporter = createTransporter();

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Validate required fields
        if (!body.email || !body.hotelUrl) {
            throw new Error('Missing required fields: email or hotelName');
        }
        
        console.log('Sending email:', body);
        // Extract data from the request body
        const email = body.email.trim();
        const hotelUrl = body.hotelUrl.trim();

        // Send notification email to admin
        await transporter.sendMail({
            from: `Vincent from Expentura <${config.MAILUSER}>`,
            to: config.MAILUSER,
            subject: `Whitepaper Requested by ${email}`,
            html: `
                <p>Email: ${email}</p>
                <p>Hotel Name: ${hotelUrl}</p>
                <p>Requested the whitepaper.</p>
            `,
        });

        return {
            success: true,
            message: 'Email sent successfully',
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