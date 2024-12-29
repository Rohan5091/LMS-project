
const generateSendOtpHTML = (otp) => `
<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            .header {
              padding: 10px 0;
              border-bottom: 2px solid #f4f4f4;
            }
            .header h1 {
              color: #4CAF50;
              margin: 0;
            }
            .content p {
              font-size: 16px;
              line-height: 1.5;
              color: #555555;
            }
            .otp {
              display: inline-block;
              font-size: 24px;
              color: #4CAF50;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              font-size: 12px;
              color: #777777;
              margin-top: 20px;
              border-top: 2px solid #f4f4f4;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Email Verification</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>Your One-Time Password (OTP) for email verification is:</p>
              <div class="otp">${otp}</div>
              <p>Please enter this OTP on the verification page to complete your registration.</p>
              <p>If you did not request this, please ignore this email.</p>
            </div>
            <div class="footer">
              <p>Thank you for joining Code-Scorer!</p>
              <p>Need help? Contact us at support@codescorer.com</p>
            </div>
          </div>
        </body>
        </html>
`;

export default generateSendOtpHTML;