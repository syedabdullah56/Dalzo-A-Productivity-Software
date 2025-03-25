import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerBg text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo & Name */}
        <div className="text-xl font-bold">
         <Image src="/dalzoLogo2.png" alt="Dalzo Logo" height={60} width={60} /> 
          <Link href="/" className="hover:text-gray-400 transition">Dalzo</Link>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
          <Link href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/syedsohaib.anwer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/syed-muhammad-abdullah-mahmood-0a88a8266/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/abdullahsyed_56/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-4">
        &copy; {new Date().getFullYear()} Dalzo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
