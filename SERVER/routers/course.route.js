import { Router } from "express";
import { UpdateCourse, addLectureByCourseId, createCourse, getAllCourses, getLecturesByCourseId, removeCourse,removeLectureByLectureId } from "../controllers/course.controller.js";
import {isLoggedIn,authrizedRoll, authrizedSubscriber} from "../middlewares/userAuth.js";
import upload from "../middlewares/multer.middleware.js"

const courseRouter=Router();



courseRouter.route("/")
.get(getAllCourses)
.post(isLoggedIn,authrizedRoll("ADMIN"),upload.single("thumbnail"),createCourse)
.delete(isLoggedIn,authrizedRoll("ADMIN"),removeLectureByLectureId)

courseRouter.route("/:id")
.get(isLoggedIn,authrizedSubscriber,getLecturesByCourseId)
.delete(isLoggedIn,authrizedRoll("ADMIN"),removeCourse)
.put(isLoggedIn,authrizedRoll("ADMIN"),UpdateCourse)
.post(isLoggedIn,authrizedRoll("ADMIN"),upload.single("lecture"),addLectureByCourseId)



export default courseRouter;