const generateWelcomeEmailHTML = (username) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Email</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 10px 0;
      border-bottom: 2px solid #f4f4f4;
    }
    .header h1 {
      color: #4CAF50;
      margin: 0;
    }
    .image-container {
      text-align: center;
      margin: 20px 0;
    }
    .content {
      padding: 20px;
      text-align: center;
    }
    .content h2 {
      color: #333333;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
      color: #555555;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #777777;
      padding: 10px 0;
      border-top: 2px solid #f4f4f4;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to Code-Scorer!</h1>
    </div>
    <div class="content">
      <h2>Hello, ${username}!</h2>
      <p>Welcome to Code-Scorer, where learning is fun and engaging!</p>
      <p>We’re excited to have you onboard. Start exploring Code-Scorer today!</p>
    </div>
    <div class="footer">
      <p>Thank you for joining us! We’re here to support your learning journey.</p>
      <p> The Code-Scorer Team </p>
    </div>
  </div>
</body>
</html>
`;

export default generateWelcomeEmailHTML;