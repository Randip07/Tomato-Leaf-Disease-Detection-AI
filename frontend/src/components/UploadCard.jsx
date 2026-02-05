import React, { useState } from "react";
import { Camera, Leaf, X } from "lucide-react";
import ImageUpload from "./ImageUpload";

const UploadCard = ({setShowCard, setPrediction}) => {
  const [image, setImage] = useState(null);
   const [preview, setPreview] = useState(null);
   const onClose = () => {
    setPreview(null)
    setImage(null)
   };
   return (
      <div className="  bg-[#8D6E63] md:w-1/2 flex items-center justify-center py-10 rounded-r-3xl">
         {/* The Dashed Upload Box */}
         <div className="bg-[#2E7D32] rounded-3xl border-[3px] border-dashed border-white/40 text-white shadow-lg flex flex-col items-center p-10 gap-3">
            {!preview && (
               <>
                  <Camera className="w-30 h-30  opacity-90" strokeWidth={1.5} />

                  <h1 className="text-xl font-semibold">Upload Your Image Here</h1>
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

            <ImageUpload setPreview={setPreview} image={image} setImage={setImage} setShowCard={setShowCard} setPrediction={setPrediction}/>

            <p className="text-sm opacity-90 max-w-xs leading-relaxed pt-2">Instantly detect diseases and get AI-based treatment plans.</p>

            {/* Hidden file input field for functionality later */}
            <input type="file" id="file-upload" className="hidden" accept="image/png, image/jpeg" />
         </div>
      </div>
   );
};

export default UploadCard;
