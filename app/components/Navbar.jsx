import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const sideMenuRef = useRef(); // Ref for mobile menu

  const openMenu = () => {
    // Opens the mobile menu by moving it into view
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    // Closes the mobile menu by moving it out of view
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      {/* Top navbar */}
      <nav
        className={
          "w-full fixed px-5 lg:px-8 xl:px-[16%] py-6 flex items-center justify-between text-sm z-50 bg-white border-b borderColor"
        }
      >
        {/* Logo */}
        <a href='#top'>
          <Image
            src={assets.logo}
            alt='logo'
            className='w-28 cursor-pointer mr-14'
          />
        </a>

        {/* Desktop menu */}
        <ul
          className={
            "hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3"
          }
        >
          <li>
            <a className='' href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='' href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='' href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='' href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='' href='#contact'>
              Contact me
            </a>
          </li>
        </ul>

        {/* Right actions */}
        <div className='flex items-center gap-4'>
          <a href='#contact' className='hidden btn-primary'>
            contact{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' />
          </a>

          {/* Hamburger menu for mobile */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* Mobile slide-out menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'
        >
          {/* Close icon */}
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=''
              className='w-5 cursor-pointer'
            />
          </div>

          {/* Menu links */}
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className='font-Ovo' onClick={closeMenu} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
