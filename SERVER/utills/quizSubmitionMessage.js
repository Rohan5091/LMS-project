
const generateQuizSubmissionHTML = (username, score,TotalQue,QuizTitle) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz Submission</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
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
      border-bottom: 2px solid #f4f4f9;
    }
    .header h1 {
      color: #81E6D9;
      margin: 0;
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
      border-top: 2px solid #f4f4f9;
      margin-top: 20px;
    }
    .content .score{
      font-size: 20px;
      font-weight: bold;
      color: red;
    }
    .content .Quiztit{
      font-size: 20px;
      font-weight: bold;
      color: #000000;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Code-Scorer</h1>
    </div>
    <div class="content">
      <h2>Congratulations, ${username}!</h2>
      <p>You have successfully submitted your quiz.</p>
      <p class="Quiztit">${QuizTitle}</p>
      <p class="score" >Your score is: <strong>${score}/${TotalQue}</strong></p>
      <p>Keep up the good work and strive for even better results in the future!</p>
    </div>
    <div class="footer">
      <p>Thank you for using our Quiz App.</p>
    </div>
  </div>
</body>
</html>
`;

export default generateQuizSubmissionHTML;