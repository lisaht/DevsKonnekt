"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNavOpen = () => {
    setNav(true);
  };

  const handleNavClose = () => {
    setNav(false);
  };

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src='/developers-img.jpeg' alt='DevsKonnekt Logo' width='60' height='60' />

        {/* Full Screen Menu */}
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b tracking-widest font-bold'> Home </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b tracking-widest font-bold'> Services </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b tracking-widest font-bold'> Community </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b tracking-widest font-bold'> Events </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b tracking-widest font-bold'> Jobs </li>
            </Link>
          </ul>
          <div className='md:hidden cursor-pointer' onClick={handleNavOpen}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/' alt='DevsKonnekt logo' width='50' height='50' />

              {nav && (
                <div onClick={handleNavClose} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              )}
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'> Let's Connect, Collaborate, and Conquer the Coding World </p>
            </div>
          </div>

          {/* Mobile view menu */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text:sm tracking-widest font-bold'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text:sm tracking-widest font-bold'>Services</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text:sm tracking-widest font-bold'>Community</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text:sm tracking-widest font-bold'>Events</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text:sm tracking-widest font-bold'>Jobs</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;