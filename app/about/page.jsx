import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiRedux,SiJavascript, SiTypescript, SiPython, SiC } from "react-icons/si";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bgColor text-white flex flex-col items-center p-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <Image src="/profile.jpeg" alt="Your Photo" width={150} height={150} className="rounded-full mx-auto shadow-lg border-4 border-gray-500" />
        <h1 className="text-4xl font-bold mt-4">Syed Muhammad Abdullah Mahmood</h1>
        <p className="text-gray-400 mt-2">Full-Stack Developer | MERN Stack | Next.js Enthusiast</p>
      </div>

     {/* Tech Stack */}
     <div className="mt-8 text-center">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>    
        <div className="flex flex-wrap justify-center gap-6 mt-4">
             <SiNextdotjs size={40} className="text-gray-300 hover:text-white transition" />
             <SiReact size={40} className="text-blue-400 hover:text-white transition" />
             <SiTailwindcss size={40} className="text-teal-400 hover:text-white transition" />
             <SiMongodb size={40} className="text-green-500 hover:text-white transition" />
             <SiRedux size={40} className="text-purple-500 hover:text-white transition" />
             <SiJavascript size={40} className="text-yellow-400 hover:text-white transition" />
             <SiTypescript size={40} className="text-blue-500 hover:text-white transition" />
             <SiPython size={40} className="text-blue-300 hover:text-white transition" />
             <SiC size={40} className="text-gray-400 hover:text-white transition" />
         </div>
      </div>


      {/* Goals Section */}
      <div className="mt-8 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold">My Goals</h2>
        <p className="text-gray-400 mt-2">
          I'm on a mission to become a top-tier software engineer, building impactful applications
          while continuously learning and growing in the tech industry. My dream is to contribute to
          cutting-edge projects and innovate in the field of Software development.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Let's Connect</h2>
        <div className="flex space-x-6 justify-center mt-4">
          <a href="https://www.facebook.com/syedsohaib.anwer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/in/syed-muhammad-abdullah-mahmood-0a88a8266/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/abdullahsyed_56/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={30} />
          </a>
          <a href="mailto:syedabdullah8750@gmail.com" className="hover:text-red-500 transition">
            <FaEnvelope size={30} />
          </a>
        </div>      
      </div>
    </div>
  );
}
