import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserProfile } from "../../Redux/Slices/AuthSlices";
import Homelayout from "../../Layouts/Homelayout";
import { Link } from "react-router-dom";
import { cancelSubscribe } from "../../Redux/Slices/RazorpaySlice";

function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.auth?.data);
  async function DownloadData() {
    await dispatch(GetUserProfile());
  }
  const cancelSubscribemethod= async function () {
    await dispatch(cancelSubscribe())
    DownloadData()
  }
  useEffect(() => {
    DownloadData();
  }, []);

  return (
    <Homelayout>
      <div className="min-w-[90vw] flex items-center justify-center">
        <div className="my-10 flex flex-col items-center gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_yellow]">
          <img
            className="w-40 h-40 border border-black rounded-full "
            src={userData?.avatar?.secure_url}
            alt="avatar"
          />
          <h3 className="text-3xl font-bold capitalize text-yellow-500">
            {userData?.fullName}
          </h3>
          <div className="grid grid-cols-2">
            <p className="text-yellow-500 text-xl font-semibold">Email</p>{" "}
            <p className="text-lg">{userData?.email}</p>
            <p className="text-yellow-500 text-xl font-semibold">Role</p>{" "}
            <p className="text-sm">{userData?.role}</p>
            <p className="text-yellow-500 text-xl font-semibold">
              subscription
            </p>{" "}
            <p className="text-lg">
              {userData?.subscription?.status == "active"
                ? "Active"
                : "Inactive"}
            </p>
            <p></p>
          </div>
          <div className="w-full space-x-4 ">
            <Link to={"/changepassword"}>
              <button className=" bg-yellow-500 border px-4 py-1 transition-all ease-in-out duration-300 rounded-lg hover:bg-yellow-600 ">
                Change Password
              </button>
            </Link>
            <Link to={"/user/editprofile"}>
              <button className="w-1/2 bg-yellow-500 border px-2 py-1 transition-all ease-in-out duration-300 rounded-lg hover:bg-yellow-600 ">
                Edit Profile
              </button>
            </Link>
          </div>
          {userData?.subscription?.status == "active" && (
            <button onClick={cancelSubscribemethod} className="w-full bg-red-500 border px-2 py-1 transition-all ease-in-out duration-300 rounded-lg hover:bg-red-600">
              {" "}
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </Homelayout>
  );
}

export default Profile;
