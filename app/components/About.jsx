import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about'
      className='flex flex-col gap-4 w-full px-[12%] xl:px-[10%] py-14 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <div className='flex flex-col'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-5xl'>About me</h2>
      </div>

      {/* About Content */}
      <div className='flex flex-col w-full text-center items-center mx-auto gap-6 p-4'>
        <div className='flex flex-col'>
          <p className='mb-10 max-w-2xl'>
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughtout my career, I have
            had the priviledge of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className='border-[0.5px] border-borderColor rounded-xl p-6'
                key={index}
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700'>Tools I use</h4>
          <ul className='flex mx-auto items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-borderColor rounded-lg cursor-pointer'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
