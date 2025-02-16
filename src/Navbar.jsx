import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Mobile icons
import logo from "./assets/logoo.webp";
import Button from "./components/Button"; // Importing Button Component
import { Link } from "react-scroll"; // Importing Link for smooth scrolling

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header className="w-full bg-transparent border-2 border-[#4b2b1c]">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <img src={logo} alt="Fatbee Logo" className="w-32 h-32" />
        <button onClick={toggleMenu}>
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#f6dbbf] py-4 space-y-5 shadow-md">
          <Link to="home" smooth={true} duration={500}>
            <Button text="HOME" />
          </Link>
          <Link to="online-ordering" smooth={true} duration={500}>
            <Button text="ONLINE ORDERING" />
          </Link>
          <Link to="menu" smooth={true} duration={500}>
            <Button text="MENU" />
          </Link>
          <Link to="career" smooth={true} duration={500}>
            <Button text="CAREER" />
          </Link>
          <Link to="franchise" smooth={true} duration={500}>
            <Button text="FRANCHISE" />
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <Button text="ABOUT" />
          </Link>
          <Link to="location" smooth={true} duration={500}>
            <Button text="LOCATION" />
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <Button text="EXPERIENCE" />
          </Link>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden md:flex flex-col items-center py-4 space-y-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Fatbee Logo" className="w-32 h-32" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-5 space-y-2 mb-3">
          <Link to="home" smooth={true} duration={500}>
            <Button text="HOME" />
          </Link>
          <Link to="online-ordering" smooth={true} duration={500}>
            <Button text="ONLINE ORDERING" />
          </Link>
          <Link to="menu" smooth={true} duration={500}>
            <Button text="MENU" />
          </Link>
          <Link to="career" smooth={true} duration={500}>
            <Button text="CAREER" />
          </Link>
          <Link to="franchise" smooth={true} duration={500}>
            <Button text="FRANCHISE" />
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <Button text="ABOUT" />
          </Link>
          <Link to="location" smooth={true} duration={500}>
            <Button text="LOCATION" />
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <Button text="EXPERIENCE" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
