import React from 'react';
import { AiOutlineDownload, AiFillFacebook } from 'react-icons/ai';
import { SiMessenger, SiGoogleads, SiTinder, SiSpotify, SiTwitter, SiInstagram, SiTiktok } from 'react-icons/si';
import { FaLink } from "react-icons/fa";

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
    id: 3,
    icon: <SiGoogleads className='text-green-500' size='40' />,  
    name: 'Google Ads',
    description: 'Grow your business with Google Ads. Reach potential customers and increase sales.',
},

{
    id: 4,
    icon: <SiTinder className='text-red-500' size='40' />,  
    name: 'Tinder',
    description: 'Match and chat. Find meaningful connections with people near you, Reach potential customers',
},

{
    id: 5,
    icon: <SiSpotify className='text-green-600' size='40' />,  
    name: 'Spotify',
    description: 'Discover new music, Listen to millions of songs for free. Discover new music and playlists.',
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
{
    id: 8,
    icon: <SiTiktok className='text-black' size='40' />,  
    name: 'TikTok',
    description: 'Make Your Day. Discover new music, Discover entertaining videos tailored for you.',
}


];

function SocialMedia() {
    return (
        <div className='max-w-8xl mx-auto p-5 bg-yellow-500  rounded-md shadow-md'>
            <h2 className='text-2xl font-bold text-black mb-8  text-center'>Explore Apps</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {appsData.map((app) => (
                    <div key={app.id} className='bg-black rounded-lg hover:rotate-6 hover:shadow-black  shadow-sm p-6 flex flex-col items-center'>
                        <div className='w-15 h-15 mb-4 flex items-center justify-center'>{app.icon}</div>
                        <h3 className='text-lg font-bold text-white mb-3'>{app.name}</h3>
                        <p className='text-sm text-white mb-5 text-center'>{app.description}</p>
                        <button className='bg-yellow-500 text-black rounded-full px-4 py-2 flex items-center hover:bg-white hover:scale-125 hover:shadow-white transition duration-500 ease-in-out'>
                            <FaLink className='mr-2' />Connect
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SocialMedia;