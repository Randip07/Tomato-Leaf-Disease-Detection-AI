import React from "react";
import { Camera, Leaf } from "lucide-react";

const NavBar = ({setShowPopUp, setPopUpType}) => {
   return (
      <nav className="bg-[#2E7D32] w-full text-white py-8 px-6 md:px-12 flex items-center justify-between sticky top-0 z-10 shadow-md">
         {/* Logo Area */}
         <div className="flex items-center space-x-2">
            {/* A composite logo trying to match the design's feel */}
            <div className="relative">
               <Leaf className="text-green-300 h-8 w-8 absolute -left-4 -top-4" />
               <div className="bg-red-600 rounded-full p-1 relative z-10">
                  <Camera className="h-6 w-6 text-white" />
               </div>
            </div>
            <span className="text-2xl md:text-2xl font-bold tracking-tight ml-2">Tomato Care AI</span>
         </div>

         {/* Desktop Navigation Links */}
         <div className="hidden md:flex space-x-15 text-lg font-medium">
            <button onClick={()=>{setShowPopUp(true); setPopUpType("1")}} className="hover:text-green-200 transition-colors cursor-pointer">
               How it Works
            </button>
            <button onClick={()=>{setShowPopUp(true); setPopUpType("2")}} className="hover:text-green-200 transition-colors cursor-pointer">
               Disease Library
            </button>
            {/* <button onClick={()=>setShowPopUp(true)} className="hover:text-green-200 transition-colors cursor-pointer">
               About Us
            </button> */}
         </div>

         {/* Mobile Menu Button (Placeholder) */}
         <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
         </button>
      </nav>
   );
};

export default NavBar;
