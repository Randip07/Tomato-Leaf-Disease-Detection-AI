import { Download, IndianRupee, MapPinHouse, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import Loading from "./Loading";
import {DiseaseLibrary, HowItWorks} from "../data/popUpContent";



const PopUp = ({ onClose , popUpType = "1"}) => {
   const [loading, setLoading] = useState(false);
   const modelRef = useRef();

   const closeModel = (e) => {
      if (modelRef.current === e.target) {
         onClose();
      }
   };

   // useEffect(()=>{
   //    setTimeout(() => {
   //       setLoading(false)
   //    }, 300);
   // },[])

   return (
      <div onClick={closeModel} ref={modelRef} className="z-100 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center pt-10 ">
         {loading ? <Loading></Loading> : (
            <Zoom duration={300}>
            <div className="flex flex-col text-white">
               <button onClick={onClose} className="place-self-end text-black cursor-pointer">
                  <X />
               </button>
               <div className="rounded-xl flex flex-col items-center mx-4 bg-white">
                        <div className="py-5 px-5 flex flex-col justify-start">
                          {popUpType=="1"? <HowItWorks/> : <DiseaseLibrary/>}
                        </div>
               </div>
            </div>
         </Zoom>
         )}
      </div>
   );
};

export default PopUp;
