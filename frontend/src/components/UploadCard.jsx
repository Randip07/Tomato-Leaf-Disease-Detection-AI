import React, { useState } from "react";
import { Camera, Leaf, X } from "lucide-react";
import ImageUpload from "./ImageUpload";

const UploadCard = ({setShowCard, setPrediction, setUrl, setCure}) => {
  const [image, setImage] = useState(null);
   const [preview, setPreview] = useState(null);
   const onClose = () => {
    setPreview(null)
    setImage(null)
   };
   return (
      <div className="bg-gradient-to-tr from-black to-[#f1a082]  w-full flex  justify-center rounded-b-3xl p-7 ">
         <div className="bg-gradient-to-tr from-black to-[#1aac21] rounded-b-3xl md:rounded-3xl border-[3px] border-dashed border-gray-300 text-white flex flex-col p-5 items-center gap-3">
            {!preview && (
               <>
                  <Camera className="w-20 h-20  opacity-90" strokeWidth={1.5} />

                  <h1 className="text-xl font-semibold">Upload Your Image Here</h1>
               </>
            )}

            {preview && (
               <div className="flex flex-col text-white">
                  {/* <button onClick={onClose} className="place-self-end text-black cursor-pointer w-2" >
                     <X size={35}/>
                  </button> */}
                  <img src={preview} alt="Preview" style={{ width: "100px", height:"100px", borderRadius: "8px" }} />
               </div>
            )}
             <ImageUpload setPreview={setPreview} image={image} setImage={setImage} setUrl={setUrl} setShowCard={setShowCard} setPrediction={setPrediction} setCure={setCure}/>

          <p className="text-sm opacity-90 max-w-xs leading-relaxed pt-2">Instantly detect diseases and get AI-based treatment plans.</p>

          {/* Hidden file input field for functionality later */}
          {/* <input type="file" id="file-upload" className="hidden" accept="image/png, image/jpeg" /> */}
         </div>
      </div>
   );
};

export default UploadCard;
