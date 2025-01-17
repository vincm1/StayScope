import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    secure: false,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD,
    },
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Log the request body for debugging
        console.log('Received body:', body);

        // Validate required fields
        if (!body.firstname || !body.email) {
            throw new Error('Missing required fields: firstname, email, or message');
        }

        const mail = await transporter.sendMail({
            from: config.MAILUSER,
            to: config.CONTACTMAIL,
            subject: "Message title",
            text: "Plaintext version of the message",
            html: "<p>HTML version of the message</p>",
        });

        console.log('Message sent: %s', mail.messageId);
        return {
            success: true,
            message: 'Email sent successfully',
        };
    } catch (error) {
        console.error('Error sending email:', error);

        sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: error.message || 'An error occurred while sending the email',
            })
        );
    }
});