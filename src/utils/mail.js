import Mailgen from "mailgen"; 
import nodemailer from "nodemailer"

const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Tak Manager",
            link: "httpa://taskmanagelink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)



    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS,
        }
    })

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service failed")
        console.error("Error: ", error)
    }
};


const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro : "Welcome to our App! we are eccited to have you on board.",
            action : {
                instructions :
                "To verify your email please click on the folloing button",
                button: {
                    color: "#22BC66",
                    text: "verify your email",
                    link: verificationUrl
                },
            },
            outro:
            "Need help, or have questions? Just reply to this email, we'do love to help.",
        },
    };
};

import Mailgen from "mailgen"; 



const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro : "We got request to rest password",
            action : {
                instructions :
                "To reset yout password click on the folloing button",
                button: {
                    color: "#22BC66",
                    text: "Reset password",
                    link: passwordResetUrl,
                },
            },
            outro:
            "Need help, or have questions? Just reply to this email, we'do love to help.",
        },
    };
};

export{
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sendEmail,
};