import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

import { readFileSync } from 'fs';
import { join } from 'path';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    secure: true,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD,
    },
    tls:{
        rejectUnauthorized: false,  
        ciphers: "SSLv3"  
    },
    logger: true, // Enable logging
});

export default defineEventHandler(async (event) => {
    try {

        const body = await readBody(event);

        // Validate required fields
        if (!body.firstname || !body.email) {
            throw new Error('Missing required fields: firstname or email');
        }

        // Get data from the request body
        const firstName = body.firstname || '';
        const lastName = body.lastname || '';

        // Read the HTML template
        const templatePath = join(process.cwd(), './assets/email_templates/whitepaper_download.html');
        let htmlTemplate = readFileSync(templatePath, 'utf8');
        const handlebarsTemplate = handlebars.compile(htmlTemplate);  
        htmlTemplate = handlebarsTemplate({ firstName: firstName, lastName: lastName });

        const mail = await transporter.sendMail({
            from: `Vincent from expentura <${config.MAILUSER}>`,
            to: body.email,
            subject: 'Your Experience Economy report request',
            html: htmlTemplate.replace('{{ firstname }}', firstName)
                            .replace('{{ lastname }}', lastName),
            attachments: [
                {
                    filename: 'expierence_economy_expentura.pdf',
                    path: './assets/expierence_economy_expentura.pdf',
                },
            ],
        });

        const mail2 = await transporter.sendMail({
            from: `Vincent from expentura <${config.MAILUSER}>`,
            to: config.MAILUSER,
            subject: 'Whitpaper requested from ' + body.firstname,
            text: 'Hello,',
            html: `<p>${body.firstname} ${body.lastname} from Hotel:</p>
                    <p class="font-semibold">${body.hotelname} with Hotels: ${body.numhotels}</p>
                    <p>Requested the whitepaper.</p>`,
        });

        return {
            success: true,
            message: 'Email sent successfully',
            code: 200,
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
