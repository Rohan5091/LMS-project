import React from 'react';
import { AiOutlineDownload, AiFillFacebook } from 'react-icons/ai';
import { SiMessenger, SiGoogleads, SiTinder, SiSpotify, SiTwitter, SiInstagram, SiTiktok } from 'react-icons/si';
import { FaLink } from "react-icons/fa";
import gif7 from "../assets/Images/gif7.gif"


const appsData = [
{
    id: 1,
    icon: <AiFillFacebook className='text-blue-600' size='40' />,  
    name: 'Facebook',
    description: 'Connect with friends and the world around you. Share updates and moments with your network.',
},
{
    id: 2,
    icon: <SiMessenger className='text-blue-500' size='40' />,  
    name: 'Messenger',
    description: 'Connect everywhere. Connect with friends Instantly chat and video call with your contacts.',
},


{
    id: 6,
    icon: <SiTwitter className='text-blue-400' size='40' />,  
    name: 'Twitter',
    description: "What's happening? Stay informed with updates and discussions,potential customers",
},

{
    id: 7,
    icon: <SiInstagram className='text-pink-600' size='40' />,  
    name: 'Instagram',
    description: 'Capture and share moments. Make Your Day, Follow friends and explore new photos.',
},
];

function SocialMedia() {
    return (
        <div className='h-[100%] max-w-8xl mx-auto p-5 bg-black  rounded-md shadow-md'>
            <h2 className='text-4xl font-bold text-teal-700 {/*shadow-lg shadow-black*/}  mb-8  text-center'>Let's Connect</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {appsData.map((app) => (
                    <div key={app.id} className='bg-gray-900 shadow-lg shadow-black rounded-lg hover:bg-gray-800 hover:scale-125 hover:translate-y-20 transition duration-500 ease-in-out p-6 flex flex-col items-center'>
                        <div className='w-15 h-15 mb-4 flex items-center justify-center'>{app.icon}</div>
                        <h3 className='text-lg font-bold text-white mb-3'>{app.name}</h3>
                        <p className='text-sm text-white mb-5 text-center'>{app.description}</p>
                        <button className='bg-teal-700 text-black rounded-full  px-4 py-2 flex items-center hover:bg-white hover:scale-125 hover:shadow-white hover:opacity-30 transition duration-500 ease-in-out'>
                            <FaLink className='mr-2' />Connect
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex gap-48 pt-10 items-center '>
                <div className=" text-9xl opacity-40  text-teal-300  font-extrabold ">CODE-SCORER</div>
                <img
                    src={gif7}
                    alt="Code-Scorer Animation"
                    className="h-72 w-72" // Adjust height and width as needed
                />
            </div>
        </div>
    );
}

export default SocialMedia;