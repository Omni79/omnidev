import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGitAlt,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div
      className='flex 
  justify-between 
  w-full 
  px-4 sm:px-[16%]
  items-start 
  py-4 sm:py-10
  mt-[60px] sm:mt-[130px] 
  scroll-mt-20'
    >
      {/* Left */}
      <div className='flex flex-col justify-start'>
        <h3 className='flex gap-2 font-semibold text-lg'>Omoyele Shedrach</h3>
        <h1 className='mb-16 sm:mb-4'>— React/Nextjs and webflow Developer</h1>
        
        <p className='max-w-[500px] leading-relaxed mb-10'>
          I’m a developer focused on MERN/Next.js and Webflow. I enjoy building
          sites & apps. 
        </p>

        <p className='max-w-[500px] leading-relaxed mb-10'>
          MERN | NextJS | Webflow | Tailwind CSS | Figma | Vercel |
          Sanity
        </p>

        <a
          href='mailto:shedrachomoyele79@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col w-max gap-1 text-lg font-semibold mb-4'
        >
          Let's work together
          <div className='w-full h-[0.5px] bg-white'></div>
        </a>
        <div className='flex gap-4 mb-12'>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            className='border rounded-full  w-9 aspect-square flex items-center justify-center'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href='https://github.com/Omni79'
            target='_blank'
            rel='noopener noreferrer'
            className=' border rounded-full  w-9 aspect-square flex items-center justify-center'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            className=' border rounded-full  w-9 aspect-square flex items-center justify-center'
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        <p>Some of the projects I've worked on: </p>
      </div>

      {/* Right */}
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </div>
    </div>
  );
};

export default Header;
