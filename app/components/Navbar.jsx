"use client"; // Ensure it's a client component

import { useState, useEffect } from "react";
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

      {/* Current Time */}
      <div className="text-sm">
        <p>{currentTime}</p>
        <p className="text-gray-400">{timeZone}</p>
      </div>
    </nav>
  );
};

export default Navbar;
