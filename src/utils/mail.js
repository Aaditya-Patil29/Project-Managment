import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const mailgenerator = new Mailgen({
        theme: "default",
        product: {
            name: "task management",
            link: "https://yourapp.com"
        }
    })

const emailtextual = mailgenerator.generatePlaintext(options.mailgeneContent)
const emailhtml = mailgenerator.generate(options.mailgeneContent)

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mail = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    text: emailtextual,
    html: emailhtml
}

try {
    await transporter.sendMail(mail)
    
} catch (error) {
    console.error("Error sending email:", error)

}
};
const emailverificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our application! To complete your email verification, please click the button below:",
            action: {
                instructions: "Verify your email address:",
                button: {
                    color: "green",
                    text: "Verify Email",
                    link: verificationUrl
                }
            },
            outro: "If you did not create an account with us, please ignore this email."
        }
    };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "You have requested to reset your password. Please click the button below to set a new password:",
            action: {
                instructions: "Reset your password:",
                button: {
                    color: "green",
                    text: "Reset Password",
                    link: passwordResetUrl
                }
            },
            outro: "If you did not create an account with us, please ignore this email."
        }
    };
};

export { emailverificationMailgenContent, forgotPasswordMailgenContent, sendEmail };