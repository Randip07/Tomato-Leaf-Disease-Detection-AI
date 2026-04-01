import React, { use, useState } from "react";
import { Camera, Leaf } from "lucide-react";
import NavBar from "./NavBar";
import UploadCard from "./UploadCard";
import LeftCardHero from "./LeftCardHero";
import PopUp from "./Popup";
import ResponseCard from "./ResponseCard";
import HeroImage from "./HeroImage";
import ShowCure from "./showCure";

const HomePage = () => {
   const [showPopUp, setShowPopUp] = useState(false);
   const [popUpType, setPopUpType] = useState("");
   const [showCard, setShowCard] = useState("1");
   const [prediction, setPrediction] = useState(null);
   const [url, setUrl] = useState(null);
   const [cure, setCure] = useState(null);

   //
   const scanAnotherImage = () => {
      setShowCard("1");
      setPrediction(null);
      setCure(null);
      setUrl(null);
   };

   return (
      <div className="w-full">
         <NavBar setShowPopUp={setShowPopUp} setPopUpType={setPopUpType} />

         <main className=" w-full flex flex-col items-center bg-gray-200 min-h-[92vh]">

            <div className="flex flex-col">
               <div className="p-5 flex flex-col  items-center ">
                   <HeroImage url={url} />
                  {showCard == 1 && <UploadCard setShowCard={setShowCard} setPrediction={setPrediction} setUrl={setUrl} setCure={setCure} />}
                  {showCard == 2 && <ResponseCard setUrl={setUrl} setShowCard={setShowCard} prediction={prediction} setPrediction={setPrediction} cure={cure} setCure={setCure} />}
                  {showPopUp && <PopUp onClose={() => setShowPopUp(false)} popUpType={popUpType} />}

                  {showCard == 2 && (
                     <div className="w-full flex flex-col px-10 mt-5">

                        <button
                           onClick={scanAnotherImage}
                           className="bg-gradient-to-tr from-black to-[#02fc0e] hover:bg-[#7a5e53] text-white text-sm font-semibold py-6 px-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none cursor-pointer"
                        >
                           Scan Another Image
                        </button>
                     </div>
                  )}
               </div>

               <div className="m-4">
                  <ShowCure rawText={cure} />
               </div>
            </div>
         </main>
      </div>
   );
};

export default HomePage;
