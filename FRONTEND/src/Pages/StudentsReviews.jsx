import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const testimonials = [
  {
    name: 'Bhoomi Garg',
    title: 'SDE at Amazon',
    feedback: 'The support team was incredible at addressing our needs swiftly. Our productivity has soared thanks to their dedication.',
    imageUrl: 'https://i.pravatar.cc/400?img=32'
  },
  {
    name: 'Ankit Chandra',
    title: 'SWE at Google',
    feedback: 'I’m astounded by the lead growth we’ve achieved since using this service. Truly a game-changer for our finance department!',
    imageUrl: 'https://i.pravatar.cc/400?img=07'
  },
  {
    name: 'Raunak Mandil',
    title: 'Graphic Designer',
    feedback: 'The market strategies suggested by the team helped us triple our reach within a quarter.',
    imageUrl: 'https://i.pravatar.cc/400?img=38'
  },
  {
    name: 'Shubhankar Sharma',
    title: 'Project Manager',
    feedback: 'Their operational insights transformed our workflow, reducing costs by 20% while increasing efficiency.',
    imageUrl: 'https://i.pravatar.cc/400?img=08'
  },
  {
    name: 'Sidharth Sharma',
    title: 'Management Head',
    feedback: 'Hiring processes are now twice as efficient, thanks to the innovative solutions offered.',
    imageUrl: 'https://i.pravatar.cc/400?img=10'
  },
  {
    name: 'Naina Pandey',
    title: 'Frontend Developer',
    feedback: 'The tech support has drastically reduced downtime, improving our overall service delivery.',
    imageUrl: 'https://i.pravatar.cc/400?img=12'
  },
  {
    
    name: 'Pradumn Gharasiya',
    title: 'Marketing Manager',
    feedback: 'Working with the marketing team has been a pleasure. Their creativity and strategic approach have significantly boosted our brand visibility.',
    imageUrl: 'https://i.pravatar.cc/400?img=13'
  },
  {
    name: 'Sidharth Singh Kushwah',
    title: 'Customer Service Manager',
    feedback: 'Our customer service team has excelled since implementing the new support tools. Customer satisfaction ratings have never been higher.',
    imageUrl: 'https://i.pravatar.cc/400?img=21'
  }
];

export default function StudentsReviews() {
  return (
    <div className='py-10 bg-gray-800'>
      <h2 className='text-center text-3xl font-bold text-gray-400 mb-10'>What Do Our Students Say?</h2>
      <div className='max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-[#161617] rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'>
            <img src={testimonial.imageUrl} alt={`${testimonial.name} profile picture`} className='w-24 h-24 rounded-full mb-4' />
            <p className='text-xl font-semibold'>{testimonial.name}</p>
            <p className='text-sm italic mt-2 text-white'>{testimonial.title}</p>
            <p className='text-white text-md mt-3 text-center'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
