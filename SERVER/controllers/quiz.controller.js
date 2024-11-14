import Quiz from "../models/quiz.model.js";
import Question from "../models/question.model.js";
import ApiError from "../utills/error.utills.js";


const createQuiz=async function(req,res,next){

    const {courseId,questions,createdBy,title}=req.body;
    if (!courseId || !questions ||  !title) {
        return next(new ApiError(400,"Course id,title, Questions are required"));
    }
    if (questions.length<1) {
        return next(new ApiError(400,"Atleast one question is required"));
    }
    let questionsArray=[];
    for (const question of questions) {
      const newQuestion = new Question({
          title: question.title,
          options: question.options,
          answer: question.answer
      });
      await newQuestion.save();
      questionsArray.push(newQuestion);
   }

    
    const quiz= new Quiz({ 
        title:title, 
        courseId:courseId,
        questions:questionsArray,
        createdBy
    });

    await quiz.save();
    return res.status(201).json({
        success:true,
        message:"Quiz is created successfully",
        data:quiz
    });
}

const deleteQuiz=async function(req,res,next){
    const {quizId}=req.body;
    const quiz=await Quiz.findById(quizId);
    if (!quiz) {
        return next(new ApiError(404,"Quiz is not exist")); 
    }
    await Quiz.findByIdAndDelete(quizId);
    return res.status(200).json({
        success:true,
        message:"Quiz is deleted successfully",
    });
}

const getQuiz=async function(req,res,next){
    const {quizId}=req.body;
    const quiz=await Quiz.findById(quizId); 
    if (!quiz) {
        return next(new ApiError(404,"Quiz is not exist"));
    }
    return res.status(200).json({
        success:true,
        message:"Quiz details",
        data:quiz
    });
} 

const getAllQuiz=async function(req,res,next){
    const {courseId}=req.body;
    const quiz=await Quiz.find({courseId});
    if (!quiz) {
        return next(new ApiError(404,"Quiz is not exist"));
    }
    return res.status(200).json({
        success:true,
        message:"All Quiz",
        data:quiz
    });
}

const updateScore=async function(req,res,next){
    const {quizId,score}=req.body;
    const quiz=await Quiz.findById(quizId); 
    if (!quiz) {
        return next(new ApiError(404,"Quiz is not exist"));
    }
    quiz.score=score;
    await quiz.save();
    return res.status(200).json({
        success:true,
        message:"Quiz score is updated successfully",
        data:quiz
    });
}

export {
    createQuiz,
    deleteQuiz,
    getQuiz,
    getAllQuiz
}
