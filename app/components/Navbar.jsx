"use client"; 

import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }).format(now);

      setCurrentTime(formattedTime);
      setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <nav className="bodyColor text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image src="/dalzoLogo2.png" alt="Dalzo Logo" height={60} width={60} />
        <span className="text-xl font-bold">Dalzo</span>
      </div>

      {/* Navigation Links */}
      <div className="navbarLinks flex space-x-6 p-[2vh] rounded-[2vh] shadow-lg">
        <Link href="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/progress" className="hover:text-gray-400 transition">
          Your Progress
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </div>


     {/* Wrapper of Time and Authentication */}
     <div className="flex flex-row gap-x-[2vw]">
          {/* Current Time */}
      <div className="text-md">
        <p>{currentTime}</p>
        <p className="text-gray-400">{timeZone}</p>
      </div>

      {/* Authentication Section Made With Clerk */}
      <div className="flex items-center space-x-4">
        {/* Show Sign In & Sign Up when signed out */}
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        {/* Show Profile Icon when signed in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

     </div>
   
    </nav>
  );
};

export default Navbar;
