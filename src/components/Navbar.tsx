'use client';
import React, { useState } from 'react';
import { FaHome, FaUserPlus, FaHeadset } from 'react-icons/fa';
import { IoInformationCircle } from 'react-icons/io5';
import { MdPermDeviceInformation } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdKeyboardCommandKey } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FaStore } from 'react-icons/fa';

import { motion } from 'framer-motion';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsOpen(false), 300);
    setTimeoutId(id);
  };

  const handleNavClick = (sectionId: string) => {
    // Smooth scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar bg-custom-base-100 text-white flex flex-wrap justify-between items-center">
      {/* Dropdown for mobile */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-custom-base-100 rounded-box z-50 mt-3 w-40 p-2 shadow-lg"
        >
          <li>
            <Link href="/" onClick={() => handleNavClick('home')}>
              <span className="menu-item flex items-center">
                <FaHome className="h-5 w-5 mr-2" />
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => handleNavClick('about')}>
              <span className="menu-item flex items-center">
                <MdPermDeviceInformation className="h-5 w-5 mr-2" />
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="#channels" onClick={() => handleNavClick('channels')}>
              <span className="menu-item flex items-center">
                <MdKeyboardCommandKey  className="h-5 w-5 mr-2" />
                Channels
              </span>
            </Link>
          </li>
          <li>
            <Link href="#team" onClick={() => handleNavClick('team')}>
              <span className="menu-item flex items-center">
                <FaUsers className="h-5 w-5 mr-2" />
                Team
              </span>
            </Link>
          </li>
          <li>
            <Link href="#brands" onClick={() => handleNavClick('brands')}>
              <span className="menu-item flex items-center">
                <FaStore  className="h-5 w-5 mr-2" />
                Brands
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => handleNavClick('contact')}>
              <span className="menu-item flex items-center">
                <FaHeadset className="h-5 w-5 mr-2" />
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <Link href="/" className="btn btn-ghost text-xl mx-auto">
        <span>Assassins<span className="text-red-600">Army</span></span>
      </Link>
      
      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal flex space-x-4 px-1">
          <li>
            <div className="tooltip">
              <Link href="/" onClick={() => handleNavClick('home')}>
                <FaHome className="h-5 w-5" />
              </Link>
              <span className="tooltiptext">Home</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
              <Link href="#about" onClick={() => handleNavClick('about')}>
                <MdPermDeviceInformation className="h-5 w-5" />
              </Link>
              <span className="tooltiptext">About</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
              <Link href="#channels" onClick={() => handleNavClick('channels')}>
                <MdKeyboardCommandKey className="h-5 w-5" />
              </Link>
              <span className="tooltiptext">Channels</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
              <Link href="#team" onClick={() => handleNavClick('team')}>
                <FaUsers className="h-5 w-5" />
              </Link>
              <span className="tooltiptext">Team</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
              <Link href="#brands" onClick={() => handleNavClick('brands')}>
                <FaStore className="h-5 w-5" />
              </Link>
              <span className="tooltiptext">Brands</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
            <Link href="#contactus" onClick={() => handleNavClick('contact')}>
                <FaHeadset className="h-5 w-5" />
              </Link>
              <span className="tooltiptext">Contact Us</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
