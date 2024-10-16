
'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/navigation';
import './custom.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

const HomePage = () => {
  const router = useRouter();

  const handleHireMeClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      <main className="flex flex-col md:flex-row items-center"> {/* Updated flex direction */}
      
        <div className="flex-1 flex justify-center items-center mb-8">
          <Image
            src="/images/girl.jpeg" 
            alt="Your Name"
            className="rounded-full" 
            width={450} 
            height={400} 
          />
        </div>

        
        <div className="flex-1 md:ml-8 text-center md:text-left"> 
          <h1 className="text-3xl font-bold">Hi! I'm Muskan Nisar</h1>

          {/* Typewriter Effect */}
          <h2 className="text-2xl mt-2">
            <Typewriter
              options={{
                strings: ["A Passionate Front End Developer", "and Certified IT Support Specialist!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <br />

          <p className="text-lg">
            “I’m driven by a passion for creating visually stunning and highly functional websites that provide seamless user experiences. With a strong focus on front-end development, I love transforming ideas into interactive, responsive designs. As a Certified IT Support Specialist, I bring expertise in automation and troubleshooting, ensuring that the technical backbone of every project runs smoothly. I’m always eager to take on new challenges and deliver top-tier solutions that exceed expectations.”
          </p>

          <h2 className="mt-8 text-2xl">Services:</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>Create Responsive Websites</li>
            <li>Design User-Friendly Interfaces</li>
            <li>Build Front-end Web Solutions</li>
            <li>Automate IT Support</li>
            <li>I Blend Creativity with Technology</li>
          </ul>
          <br />

          {/* Hire Me Button */}
          <button
            onClick={handleHireMeClick}
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition" // Added button styles
          >
            Hire Me
          </button>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
