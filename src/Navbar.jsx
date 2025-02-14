import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Mobile icons
import logo from "./assets/logoo.png";
import Button from "./components/Button"; // Importing Button Component

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        <img src={logo} alt="Fatbee Logo" className="w-20 h-20" />
        <button onClick={toggleMenu}>
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-2 shadow-md">
          <Button text="HOME" />
          <Button text="ONLINE ORDERING" />
          <Button text="MENU" />
          <Button text="CAREER" />
          <Button text="FRANCHISE" />
          <Button text="ABOUT" />
          <Button text="LOCATION" />
          <Button text="EXPERIENCE" />
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden md:flex flex-col items-center py-4 space-y-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Fatbee Logo" className="w-32 h-32" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Button text="HOME" />
          <Button text="ONLINE ORDERING" />
          <Button text="MENU" />
          <Button text="CAREER" />
          <Button text="FRANCHISE" />
          <Button text="ABOUT" />
          <Button text="LOCATION" />
          <Button text="EXPERIENCE" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
