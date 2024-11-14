import React from 'react';
import { FaTwitter, FaGithub, FaSlackHash } from 'react-icons/fa';
import deveshsir from "../assets/Images/deveshsir.jpg"
import rohitsir from "../assets/Images/rohitsir.jpg"
import manishsir from "../assets/Images/manishsir.jpg"
import dheerajsir from "../assets/Images/dheerajsir.jpg"
import khushboomaam from "../assets/Images/khushboomaam.jpg"
import manjarimaam from "../assets/Images/manjarimaam.jpg"
import Rohan from "../assets/Images/rohan.jpg"
import brajraj from "../assets/Images/brajraj.png"

const leadershipData = [
  {
    id: 1,
    name: 'Dr. Manish Dixit',
    title: 'Head of Department',
    bio: 'Leading our team to success. Committed to excellence. Innovator at heart.',
    imageUrl: manishsir,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 2,
    name: 'Asst. Prof. Dheeraj Kumar Dixit',
    title: 'Asst. Professor',
    bio: 'Innovating our technology stack. Passionate about coding. Always learning.',
    imageUrl: dheerajsir,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 3,
    name: 'Asst. Prof. Khushboo Agrawal',
    title: 'Asst. Professor',
    bio: 'Driving operational excellence. Efficiency and effectiveness in all we do. Team builder.',
    imageUrl: khushboomaam,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 4,
    name: 'Dr. Devesh Kumar Lal',
    title: 'Asst. Professor',
    bio: 'Innovating our technology stack. Passionate about coding. Always learning.',
    imageUrl: deveshsir,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 5,
    name: 'Dr. Manjari Pandit',
    title: 'Dean Student Acedmics',
    bio: 'Crafting our brand story. Marketing genius. Creative and innovative.',
    imageUrl: manjarimaam,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 6,
    name: 'Dr. Rohit Agrawal',
    title: 'Asst. Professor',
    bio: 'Leading IT innovation. Tech-savvy leader. Driving digital transformation.',
    imageUrl: rohitsir,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 7,
    name: 'Rohan Malakar',
    title: 'Full Stack Developer',
    bio: 'Fostering a culture of growth and development. People-first leader. Champion for diversity.',
    imageUrl: Rohan,
    twitterUrl: '#',
    githubUrl: '#',
    slackUrl: '#'
  },
  {
    id: 8,
    name: 'Brajraj Mishra',
    title: 'Full Stack Developer',
    bio: 'Strategizing for success. Visionary thinker. Committed to innovation and excellence.',
    imageUrl: brajraj,
    githubUrl: '#',
    slackUrl: '#'
  }
];

const TopEducator = () => (
  <div className='bg-yellow-500 text-white py-10'>
    <div className='text-center'>
      <h1 className='text-4xl text-black font-bold '>Our Faculties</h1>
      <p className='text-xl font-light italic text-black mt-2'>EXCELLENCE</p>
    </div>
    <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
      {leadershipData.map(({ id, name, title, bio, imageUrl, twitterUrl, githubUrl, slackUrl }) => (
        <div key={id} className='bg-black shadow-lg shadow-black rounded-lg transition-transform transform hover:scale-110 hover:bg-gray-800 cursor-pointer p-6 text-center '>
          <img src={imageUrl} alt={name} className='w-24 h-24 rounded-full mx-auto' />
          <h3 className='text-2xl font-bold mt-4'>{name}</h3>
          <p className='text-blue-500'>{title}</p>
          <p className='text-sm mt-2'>{bio}</p>
          <div className='flex justify-center mt-4 space-x-3'>
            <a href={twitterUrl}><FaTwitter className='text-blue-500' /></a>
            <a href={githubUrl}><FaGithub className='text-blue-500' /></a>
            <a href={slackUrl}><FaSlackHash className='text-blue-500' /></a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopEducator;