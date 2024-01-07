
import nodemailer from "nodemailer"

 const sendMail= async function(email,subject,message) {
let transporter = nodemailer.createTransport(
  {
      host: process.env.ETHEREAL_HOST_NAME ,
      port: process.env.ETHEREAL_PORT,
      auth: {
          user: process.env.ETHEREAL_USERNAME,
          pass: process.env.ETHEREAL_PASSWORD
      }
    });


    await transporter.sendMail({
        from:process.env.SMTP_FROM_MAIL,
        to:email,
        subject:subject,
        http:message
    })
  }
  
  export default sendMail;