import { Router } from "express";
import {isLoggedIn,authrizedRoll, authrizedSubscriber} from "../middlewares/userAuth.js";
import { createQuiz, deleteQuiz, getAllQuiz, getQuiz, updateQuiz } from "../controllers/quiz.controller.js";


const quizRouter=Router();

quizRouter.route("/")
.post(isLoggedIn,authrizedRoll("ADMIN"),createQuiz)
.delete(isLoggedIn,authrizedRoll("ADMIN"),deleteQuiz)
.put(isLoggedIn,authrizedSubscriber,updateQuiz)

quizRouter.route("/:quizId/getA")
.get(isLoggedIn,authrizedSubscriber,getQuiz)

quizRouter.route("/:courseId/getAll") 
.get(isLoggedIn,authrizedSubscriber,getAllQuiz)


export default quizRouter;
