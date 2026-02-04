import React from 'react'
import { Camera, Leaf } from 'lucide-react';
const UploadCard = () => {
  return (
     <div className="w-full md:w-1/2 bg-[#8D6E63] flex items-center justify-center p-6 md:p-12 lg:p-20 rounded-r-3xl">
          
          {/* The Dashed Upload Box */}
          <div className="w-full max-w-xl bg-[#2E7D32] rounded-3xl border-[3px] border-dashed border-white/40 p-8 md:p-12 flex flex-col items-center text-center text-white space-y-6 shadow-lg">
            
            <Camera className="w-20 h-20 md:w-24 md:h-24 opacity-90" strokeWidth={1.5} />
            
            <h1 className="text-2xl md:text-3xl font-semibold">
              Drag and drop here
            </h1>
            
            <span className="text-lg opacity-80">or</span>
            
            {/* The main call to action button */}
            <button className="w-full sm:w-auto bg-[#8D6E63] hover:bg-[#7a5e53] text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none cursor-pointer">
              Upload Photo
            </button>
            
            <p className="text-sm md:text-base opacity-90 max-w-xs leading-relaxed pt-2">
              Instantly detect diseases and get AI-based treatment plans.
            </p>

            {/* Hidden file input field for functionality later */}
            <input type="file" id="file-upload" className="hidden" accept="image/png, image/jpeg" />
            
          </div>
        </div>
  )
}

export default UploadCard