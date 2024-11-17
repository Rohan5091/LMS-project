import React from "react";
import gif7 from "../assets/Images/gif7.gif"; // Adjust path as needed

function Header() {
    return (
        <header className="flex items-center justify-between h-20 px-6 py-0 bg-black text-white shadow-md fixed w-full z-50">
            {/* Logo or Brand Name with GIF */}
            <div className="flex items-center h-[100%] space-x-4">
                <a href="#home" className="text-2xl font-extrabold hover:text-teal-400 transition">
                    Code-Scorer
                </a>
                <img
                    src={gif7}
                    alt="Code-Scorer Animation"
                    className="h-20 w-20" // Adjust height and width as needed
                />
            </div>

            {/* Navigation Links */}
            <nav className="space-x-6">
                <a
                    href="#home"
                    className="relative hover:text-teal-400 transition group"
                >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 leading-3 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                    href="#image-slider"
                    className="relative hover:text-teal-400 transition group"
                >
                    Image Slider
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-1000 group-hover:w-full"></span>
                </a>
                <a
                    href="#top-educators"
                    className="relative hover:text-teal-400 transition group"
                >
                    Top Educators
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-1000 group-hover:w-full"></span>
                </a>
                <a
                    href="#student-reviews"
                    className="relative hover:text-teal-400 transition group"
                >
                    Student Reviews
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-1000 group-hover:w-full"></span>
                </a>
                <a
                    href="#connect"
                    className="relative hover:text-teal-400 transition group"
                >
                    Let’s Connect
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-1000 group-hover:w-full"></span>
                </a>
                <a
                    href="#footer"
                    className="relative hover:text-teal-400 transition group"
                >
                    Footer
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-1000 group-hover:w-full"></span>
                </a>
            </nav>
        </header>
    );
}

export default Header;
