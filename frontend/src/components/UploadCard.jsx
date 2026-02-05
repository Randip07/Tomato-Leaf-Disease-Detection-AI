import React, { useState } from "react";
import { Camera, Leaf, X } from "lucide-react";
import ImageUpload from "./ImageUpload";
const UploadCard = () => {
  const [image, setImage] = useState(null);
   const [preview, setPreview] = useState(null);
   const onClose = () => {
    setPreview(null)
    setImage(null)
   };
   return (
      <div className="w-full md:w-1/2 bg-[#8D6E63] flex items-center justify-center p-6 md:p-12 lg:p-20 rounded-r-3xl">
         {/* The Dashed Upload Box */}
         <div className="w-full max-w-xl bg-[#2E7D32] rounded-3xl border-[3px] border-dashed border-white/40 p-8 md:p-12 flex flex-col items-center text-center text-white space-y-6 shadow-lg">
            {!preview && (
               <>
                  <Camera className="w-20 h-20 md:w-24 md:h-24 opacity-90" strokeWidth={1.5} />

                  <h1 className="text-2xl md:text-3xl font-semibold">Upload Your Image Here</h1>
               </>
            )}

            {preview && (
               <div className="flex flex-col text-white">
                  {/* <button onClick={onClose} className="place-self-end text-black cursor-pointer w-2" >
                     <X size={35}/>
                  </button> */}
                  <img src={preview} alt="Preview" style={{ width: "150px", height:"150px", borderRadius: "8px" }} />
               </div>
            )}

            <ImageUpload setPreview={setPreview} image={image} setImage={setImage}/>

            <p className="text-sm md:text-base opacity-90 max-w-xs leading-relaxed pt-2">Instantly detect diseases and get AI-based treatment plans.</p>

            {/* Hidden file input field for functionality later */}
            <input type="file" id="file-upload" className="hidden" accept="image/png, image/jpeg" />
         </div>
      </div>
   );
};

export default UploadCard;
