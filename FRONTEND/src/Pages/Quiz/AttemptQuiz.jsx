import React, { useEffect, useState } from 'react';
import { Pie} from "react-chartjs-2"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSubmittedQuiz, submitQuiz} from '../../Redux/Slices/QuizSlices';
import Homelayout from '../../Layouts/Homelayout';



const QuizDisplay = () => {
  const userId=useSelector(state=>state.auth.data._id);
  const [quiz, setQuiz] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const dispatch=useDispatch();

  const { state } = useLocation();
  const navigate = useNavigate();
  
  
   
  useEffect(() => {
    if(!state){
      navigate("/courses")
    }
    setQuiz(state);
    
  },[]);

  useEffect(() => {
      let response=null
      if(userId){
         response=dispatch(getSubmittedQuiz({userId:userId,quizId:state._id}));
      }
      if(response?.success){
         setIsSubmitted(response?.success);
      }
      console.log(response);
  },[userId]);
  

  const handleOptionChange = (questionIndex, optionIndex) => {
    if (isSubmitted) return; // Prevent changes after submission
    const updatedSelections = [...selectedOptions];
    updatedSelections[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelections);
  };

  const handleSubmit = () => {
    if (isSubmitted) return;

    // Calculate score and set the quiz as submitted
    let calculatedScore = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedOptions[index] == question.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
    dispatch(submitQuiz({userId:userId,quizId:quiz._id,score:calculatedScore,selectedOptions:selectedOptions}));
  };

  if (!quiz) return <p>Loading quiz...</p>;
  if (!userId) return <p>Please wait</p>;

  const QuizDetails = {
    labels: ["Correct Answer","Wrong Answer"],
    datasets: [{
      label: 'Quiz Result',
      data: [score, quiz.questions.length-score],
      backgroundColor: [
        "green",
        "red",
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1
    }]
  };


  return (
    <Homelayout>
    <div className="flex justify-center items-center py-10 min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
        {
          // Display the pie chart only after submission
          isSubmitted && (
            <div className="h-80 flex justify-center my-8">
              <Pie data={QuizDetails} />
            </div>
          )
        }
        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Question {qIndex + 1}: {question.title}
            </h3>

            {
            question.options[0].map((option, oIndex) => {
              const isCorrect = isSubmitted && oIndex == question.answer;
              const isWrong = isSubmitted && selectedOptions[qIndex] === oIndex && oIndex !== question.answer;
              return (
                <div key={oIndex} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={selectedOptions[qIndex] === oIndex}
                    onChange={() => handleOptionChange(qIndex, oIndex)}
                    disabled={isSubmitted} // Disable radio buttons after submission
                    className="form-radio w-4 h-4 radio radio-primary"
                  />
                  <label
                    className={`ml-2 text-gray-700 ${
                      isCorrect ? 'text-green-500 font-bold' : isWrong ? 'text-red-500 font-bold' : ''
                    }`}
                  >
                    {option}
                  </label>
                  <br />
                </div>
              );
            })}
          </div>
        ))}

        {!isSubmitted && (
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Answers
          </button>
        )}
      </div>
    </div>
    </Homelayout>
  );
};

export default QuizDisplay;
