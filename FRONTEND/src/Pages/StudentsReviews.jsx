
import React from 'react';
import bhoomi from "../assets/Images/bhoomi.jpg";
import siddhu from "../assets/Images/siddhu.jpg";
import sidharth from "../assets/Images/sidharth.jpg";
import raunak from "../assets/Images/raunak.jpg";
import santosh from "../assets/Images/santosh.jpg";
import ankit from "../assets/Images/ankit.jpg";
import pradumn from "../assets/Images/pradumn.jpg";
import naina from "../assets/Images/naina.jpg";

const testimonials = [
  {
    name: 'Bhoomi Garg',
    title: '"SDE at Amazon"',
    feedback: 'Great platform with knowledgeable instructors. Courses are engaging and well-structured, making complex topics easier to understand.',
    imageUrl: bhoomi
  },
  {
    name: 'Ankit Chandra',
    title: '"SWE at Google"',
    feedback: 'Easy to navigate and offers a wide variety of subjects. The live sessions add real value. Worth every penny!',
    imageUrl: ankit
  },
  {
    name: 'Raunak Mandil',
    title: '"Graphic Designer at NYKKA"',
    feedback: 'Loved the hands-on projects and quizzes. They make learning fun and interactive. Customer support is responsive too.',
    imageUrl: raunak
  },
  {
    name: 'Santosh Kumar',
    title: '"Project Manager at Microsoft"',
    feedback: 'Instructors are experts, but the video quality could be better. Overall, a solid platform for learning new skills.',
    imageUrl: santosh
  },
  {
    name: 'Sidharth Sharma',
    title: '"Management Head at American Express"',
    feedback: 'Affordable courses with detailed explanations. However, some courses lack depth. Great for beginners looking to get started.',
    imageUrl: sidharth
  },
  {
    name: 'Naina Pandey',
    title: '"Frontend Developer at Microsoft"',
    feedback: '"Flexible schedule and self-paced learning make this perfect for busy professionals. Course content is current and practical."',
    imageUrl: naina
  },
  {
    name: 'Pradumn Gharasiya',
    title: '"Marketing Manager at Amazon"',
    feedback: 'Good platform with helpful resources. The community forum is very active and supportive. Learned a lot from discussions!',
    imageUrl: pradumn
  },
  {
    name: 'Sidharth Singh Kushwah',
    title: '"Customer Service Manager at Google"',
    feedback: '"Excellent value with well-organized lessons. I appreciated the certificates provided. Would love more advanced courses."',
    imageUrl: siddhu
  }
];

export default function StudentsReviews() {
  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { clientX, clientY } = e;

    // Get card position and dimensions
    const { left, top, width, height } = card.getBoundingClientRect();
    
    // Calculate offsets relative to the card
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    // Normalize to [-0.5, 0.5] range (centered position)
    const distanceX = (offsetX / width) - 0.5; // Horizontal distance normalized
    const distanceY = (offsetY / height) - 0.5; // Vertical distance normalized

    // Increase the multiplier for stronger effect and apply more 3D transformation
    const rotateX = distanceY * -50; // X-axis tilt (top-bottom)
    const rotateY = distanceX * 50;  // Y-axis tilt (left-right)

    // Apply the transformation with smooth transition
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Reset transformation when mouse leaves
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.4s ease-out"; // Smooth transition for reset
    card.style.transform = "rotateX(0) rotateY(0)"; // Reset transform on leave
  };

  return (
    <div className='py-10 bg-gray-800'>
      <h2 className='text-center text-4xl font-bold text-gray-400 {/*shadow-lg shadow-black*/} mb-10'>What Do Our Students Say?</h2>
      <div className='max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className='bg-[#161617] rounded-lg p-6 flex flex-col text-gray-600 items-center shadow-lg shadow-white hover:scale-110 hover:bg-gray-700 hover:text-white hover:shadow-green-400 transition-all duration-500 ease-in-out'
            style={{
              perspective: '1000px',  // Add perspective to create depth
              transformStyle: 'preserve-3d'  // Ensure that 3D transforms are applied to children
            }}
            onMouseMove={handleMouseMove} // Mouse move triggers the 3D effect
            onMouseLeave={handleMouseLeave} // Mouse leave resets the transform
          >
            <img 
              src={testimonial.imageUrl} 
              alt={`${testimonial.name} profile picture`} 
              className='w-20 h-20 rounded-full mb-4 transition-transform duration-500 ease-in-out transform hover:scale-150' 
            />
            <p className='text-xl font-semibold text-white'>{testimonial.name}</p>
            <p className='text-sm italic mt-2 text-white'>{testimonial.title}</p>
            <p className='text-md mt-3 text-center'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
