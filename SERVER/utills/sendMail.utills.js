
import nodemailer from "nodemailer"

const sendMail= async function(email,subject,message) {
    
    console.log(email,subject,message);
    const auth = nodemailer.createTransport({
        service:process.env.GMAIL_HOST_NAME,
        secure : true,
        port : 465,
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const receiver = {
        from : SMTP_FROM_MAIL,
        to : email,
        subject : subject,
        text : message
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
  }
  export default sendMail;
