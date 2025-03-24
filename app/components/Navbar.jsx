"use client"; 

import { useState, useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for the hamburger menu

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <nav className="bodyColor text-white p-4 flex justify-between items-center">
      {/* Left Section: Logo + Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {isMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        )}
        <Image src="/dalzoLogo2.png" alt="Dalzo Logo" height={60} width={60} />
        <span className="text-xl font-bold">Dalzo</span>
      </div>

      {/* Navigation Links (Hidden in Mobile, Visible in Desktop) */}
      <div className={`navbarLinks flex space-x-6 p-3 rounded-lg shadow-lg w-1/4 justify-center items-center transition-all duration-300 
        ${isMobile ? (isMenuOpen ? "absolute top-16 left-4 bg-gray-800 p-4 rounded-md flex flex-col w-[200px]" : "hidden") : "flex"}`}
      >
        <Link href="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/tasks" className="hover:text-gray-400 transition">
          Tasks
        </Link>
        <Link href="/progress" className="hover:text-gray-400 transition">
          Progress
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </div>

      {/* Right Section: Time & Authentication */}
      <div className="flex items-center gap-x-6">
        {!isMobile && (
          <div className="text-md">
            <p>{currentTime}</p>
            <p className="text-gray-400">{timeZone}</p>
          </div>
        )}

        {/* Authentication Section */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 authBg text-white rounded-md transition-all duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-2 authBg text-white rounded-md transition-all duration-300">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









// "use client"; 

// import { useState, useEffect } from "react";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [currentTime, setCurrentTime] = useState("");
//   const [timeZone, setTimeZone] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const formattedTime = new Intl.DateTimeFormat("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         timeZoneName: "short",
//       }).format(now);

//       setCurrentTime(formattedTime);
//       setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000); // Update every second

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <nav className="bodyColor text-white p-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="flex items-center space-x-4">
//         <Image src="/dalzoLogo2.png" alt="Dalzo Logo" height={60} width={60} />
//         <span className="text-xl font-bold">Dalzo</span>
//       </div>

//       {/* Navigation Links */}
//       <div className="navbarLinks flex space-x-6 p-[2vh] rounded-[2vh] shadow-lg gap-x-[1vw] px-[2vw] w-[25vw] justify-center items-center">
//         <Link href="/" className="hover:text-gray-400 transition">
//           Home
//         </Link>
//         <Link href="/tasks" className="hover:text-gray-400 transition">
//           Tasks
//         </Link>
//         <Link href="/progress" className="hover:text-gray-400 transition">
//            Progress
//         </Link>
//         <Link href="/contact" className="hover:text-gray-400 transition">
//           Contact
//         </Link>
//       </div>


//      {/* Wrapper of Time and Authentication */}
//      <div className="flex flex-row gap-x-[2vw]">
//           {/* Current Time */}
//       <div className="text-md">
//         <p>{currentTime}</p>
//         <p className="text-gray-400">{timeZone}</p>
//       </div>

//       {/* Authentication Section Made With Clerk */}
//       <div className="flex items-center space-x-4">
//         {/* Show Sign In & Sign Up when signed out */}
//         <SignedOut>
//           <SignInButton>
//             <button className="px-4 py-2 authBg text-white rounded-md  transition-all duration-300">
//               Sign In
//             </button>
//           </SignInButton>
//           <SignUpButton>
//             <button className="px-4 py-2 authBg text-white rounded-md  transition-all duration-300">
//               Sign Up
//             </button>
//           </SignUpButton>
//         </SignedOut>

//         {/* Show Profile Icon when signed in */}
//         <SignedIn>
//           <UserButton afterSignOutUrl="/" />
//         </SignedIn>
//       </div>

//      </div>
   
//     </nav>
//   );
// };

// export default Navbar;
