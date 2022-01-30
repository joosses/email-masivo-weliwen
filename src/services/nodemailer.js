const nodemailer = require('nodemailer');
const Email = require('email-templates'); 
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'Zoho',
    host: 'smtp.zoho.com',
    port: '465',
    secure: true,
    auth: {
        user: 'ventas@weliwen.com',
        pass: 'Hol@Mundo1'
    }
});

module.exports = {
    sendMail: (opts) => {
        const { email, template, locals, attachements } = opts;

        const emailObject = new Email({
            send: true,
            juice: true,
            juiceResources: {
                webResources: {
                    relativeTo: path.resolve('src')
                }
            },
            transport: transporter,
            views: {
                options: {
                    extension: "handlebars"
                },
                root: path.resolve('src/emails')
            }
        })

        console.log(path.resolve('src/emails'))

        return emailObject.send({
            template,
            locals,
            message: {
                to: email,
                from: "Weliwen <ventas@Weliwen.com>", 
            }
        })
    }

}