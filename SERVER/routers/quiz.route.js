import { Router } from "express";
import {isLoggedIn,authrizedRoll, authrizedSubscriber} from "../middlewares/userAuth.js";
import { createQuiz, deleteQuiz, getAllQuiz, getQuiz, getSubmittedQuiz, submitQuiz } from "../controllers/quiz.controller.js";


const quizRouter=Router();

quizRouter.route("/")
.post(isLoggedIn,authrizedRoll("ADMIN"),createQuiz)
.delete(isLoggedIn,authrizedRoll("ADMIN"),deleteQuiz)


quizRouter.route("/:quizId/getA")
.get(isLoggedIn,authrizedSubscriber,getQuiz)

quizRouter.route("/:courseId/getAll") 
.get(isLoggedIn,authrizedSubscriber,getAllQuiz)

quizRouter.route("/:quizId/submit")
.post(isLoggedIn,authrizedSubscriber,submitQuiz)

quizRouter.route("/:quizId/getSubmitted")
.post(isLoggedIn,authrizedSubscriber,getSubmittedQuiz)

export default quizRouter;
