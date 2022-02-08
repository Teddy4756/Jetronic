const appInitial = "JETRONIC";

module.exports = {
    async sendEmail(email_address, subject, htmlContent) {
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "nho.notification@gmail.com",
            pass: "ABClotus",
          },
        });
        const mailOptions = {
          from: appInitial + "<nho.notification@gmail.com>",
          to: email_address,
          subject: subject,
          html: htmlContent,
        };
        console.log(mailOptions);
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info);
          }
        });
    }
}