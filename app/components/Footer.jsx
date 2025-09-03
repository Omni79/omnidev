import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className='flex flex-col gap-12 lg:gap-4 justify-around w-full h-[120vh] lg:h-[100vh] px-4 sm:px-[16%] items-start py-10 scroll-mt-20'>
      <div className='flex flex-col gap-4 max-w-3xl leading-relaxed'>
        <p>
          I build clear, efficient, and visually engaging web applications with
          React, focusing on clean code, maintainability, and thorough testing.
          My goal is always to translate complex ideas into intuitive,
          user-friendly experiences.
        </p>

        <p>
          Over the last 2 years, I’ve collaborated with startups, companies of
          all sizes, and design studios to bring digital products from concept
          to launch. Working closely with cross-functional teams, I’ve helped
          refine products into meaningful, goal-driven solutions.
        </p>
        <div className='flex flex-col md:flex-row gap-2'>
          <p>Available for select freelance projects.</p>
          <a
            href='mailto:shedrachomoyele79@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col w-max gap-1 text-lg'
          >
            Get in touch
            <div className='w-full h-[0.5px] bg-white'></div>
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <a href='' className='flex flex-col w-max gap-1 text-lg font-semibold'>
          Blog
          <div className='w-full h-[0.5px] bg-white'></div>
        </a>
        <a href='' className='flex flex-col w-max gap-1 text-lg font-semibold'>
          Resume
          <div className='w-full h-[0.5px] bg-white'></div>
        </a>
        <a href='' className='flex flex-col w-max gap-1 text-lg font-semibold'>
          Threads
          <div className='w-full h-[0.5px] bg-white'></div>
        </a>
        <a href='' className='flex flex-col w-max gap-1 text-lg font-semibold'>
          Elsewhere
          <div className='w-full h-[0.5px] bg-white'></div>
        </a>
      </div>

      <p className='text-white/50'>© 2025 — Omoyele Shedrach</p>
    </div>
  );
};

export default Footer;
