import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className='flex flex-col gap-12 lg:gap-4 justify-around w-full h-[120vh] lg:h-[100vh] px-[16%] items-start py-10 scroll-mt-20'>
      <div className='flex flex-col gap-4 max-w-3xl leading-relaxed'>
        <p>
          Over the last fifteen years I've had the pleasure of collaborating
          with startups, small to large companies, design studios and other
          creatives. Working side by side to create, launch and refine
          meaningful and goal oriented digital products and experiences.
        </p>

        <p>
          I take pleasure in developing clear, effective, and aesthetically
          pleasing solutions for complex problems through research, iteration,
          and prototyping. In essence, I thrive on collaborating with passionate
          startups and companies on challenging projects.
        </p>
        <div className='flex gap-2'>
          <p>Available for select freelance projects.</p>
          <a href='' className='flex flex-col w-max gap-1 text-lg'>
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
