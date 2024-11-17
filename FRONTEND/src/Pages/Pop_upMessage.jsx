import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPublished = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(-1); // Redirect to the home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Quiz Published!</h1>
        <p className="mt-4 text-gray-600">
          Your quiz has been successfully published. You can now view it in the quiz list.
        </p>
        <button
          onClick={handleRedirect}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default QuizPublished;
