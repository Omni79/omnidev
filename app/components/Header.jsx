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
  px-[8%] sm:px-[16%]
  items-start 
  py-10 
  mt-[60px] sm:mt-[130px] 
  scroll-mt-20'
    >
      {/* Left */}
      <div className='flex flex-col justify-start'>
        <h3 className='flex gap-2 font-semibold text-lg'>Omoyele Shedrach</h3>
        <h1 className='mb-4'>— React Developer</h1>
        <div className='flex gap-2 mb-10'>
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
        <p className='max-w-[500px] leading-relaxed mb-10'>
          I'm a full-stack developer based in Lagos, Nigeria. I enjoy building
          sites & apps. My focus is React(Next.js).
        </p>

        <p className='max-w-[500px] leading-relaxed mb-10'>
          MongoDB | Express | React.js | Next.js | Figma | VS Code | Vercel |
          Webflow
        </p>

        <a
          href='mailto:shedrachomoyele79@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col w-max gap-1 text-lg font-semibold mb-12'
        >
          Let's work together
          <div className='w-full h-[0.5px] bg-white'></div>
        </a>

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
