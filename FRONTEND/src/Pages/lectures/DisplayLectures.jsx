import { useDispatch, useSelector } from "react-redux";
import Homelayout from "../../Layouts/Homelayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GetAllCourseLectures,
  RemoveLecture,
} from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state?.lecture);

  const { role } = useSelector((state) => state.auth);
  const [currentLecture, setCurrentLecture] = useState(0);

  async function onLectureDelete(courseId, lectureId) {
    if (!courseId || !lectureId) {
      return;
    }
    await dispatch(RemoveLecture(courseId, lectureId));
    await dispatch(GetAllCourseLectures(courseId));
  }
  async function GetAllcourse() {
    await dispatch(GetAllCourseLectures(state._id));
  }

  useEffect(() => {
    if (!state) {
      navigate("/courses");
    }
    GetAllcourse();
    if (!lectures) {
      navigate(`course/${state?._id}/addlecture`);
    }
  }, []);
  return (
    <Homelayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-4 ">
        <div className="text-center text-2xl font-semibold text-yellow-500">
          Course Name:{state?.title}
        </div>
        {lectures && lectures.length > 0 && (
          <div className="flex justify-center gap-10 w-full">
            <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_yellow]">
              <video
                controls
                className="object-fill rounded-tl-lg rounded-tr-lg w-full"
                src={lectures && lectures[currentLecture]?.lecture?.secure_url}
                disablePictureInPicture
                muted
                controlsList="nodownload"
              ></video>
              <div>
                <h1>
                  <span className="text-yellow-500 ">Title :{"  "}</span>
                  {lectures && lectures[currentLecture]?.title}
                </h1>
                <p>
                  <span className="text-yellow-500 ">Description :{"  "}</span>
                  {lectures && lectures[currentLecture]?.description}
                </p>
              </div>
            </div>
            <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_yellow] space-y-4">
              <li className="font-semibold text-xl text-yellow-500 flex items-center justify-center">
                <p className="">Lecture list</p>
                {role === "ADMIN" && (
                  <button
                    onClick={() => {
                      navigate(`/course/${state?._id}/addlecture`, {
                        state: { ...state },
                      });
                    }}
                    className="btn btn-active ml-5 btn-primary "
                  >
                    Add new lecture
                  </button>
                )}
              </li>
              {lectures &&
                lectures.map((lecture, idx) => {
                  return (
                    <li className="space-y-2" key={lecture._id}>
                      <p
                        className="cursor-pointer"
                        onClick={() => setCurrentLecture(idx)}
                      >
                        <span>
                          {" "}
                          Lecture {idx + 1} :{"  "}
                        </span>
                        {lecture.title}
                      </p>
                      {role === "ADMIN" && (
                        <button
                          onClick={() => {
                            onLectureDelete(state?._id, lecture?._id);
                          }}
                          className="btn btn-accent px-2 py-1 rounded-md font-semibold text-sm"
                        >
                          Delete lecture
                        </button>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

        {role === "ADMIN" && lectures.length == 0 && (
          <button
            onClick={() => {
              navigate(`/course/${state?._id}/addlecture`, {
                state: { ...state },
              });
            }}
            className="btn btn-active ml-5"
          >
            Add new lecture
          </button>
        )}
      </div>
    </Homelayout>
  );
}

export default DisplayLectures;
