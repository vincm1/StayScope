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


const transporter = createTransporter();

export default defineEventHandler(async (event) => {
    try {
       
        // Send notification email to admin
        await transporter.sendMail({
            from: `Vincent from Expentura <${config.MAILUSER}>`,
            to: config.MAILUSER,
            subject: `Whitepaper download`,
            html: `
                Whitepaper was requested.
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
