import React, { use, useState } from "react";
import { Camera, Leaf } from "lucide-react";
import NavBar from "./NavBar";
import UploadCard from "./UploadCard";
import LeftCardHero from "./LeftCardHero";
import PopUp from "./Popup";
import ResponseCard from "./ResponseCard";

const HomePage = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState("")
    const [showCard, setShowCard] = useState('1')
    const [prediction, setPrediction]=useState(null)

//     

   return (
      <div className="min-h-screen w-full flex items-center flex-col font-sans bg-gray-100 ">
         {/* ================= Navigation Bar ================= */}
         <NavBar setShowPopUp = {setShowPopUp} setPopUpType= {setPopUpType} />

         {/* ================= Main Hero Content ================= */}
         <main className="mt-5 w-14/15 flex justify-center  min-h-[50vh] max-h-[70vh]">
            <div className="flex flex-col  justify-center md:flex-row w-5/6">
               <LeftCardHero />

               {/* --- Right Side: Upload Action Area --- */}
               {showCard==1 && <UploadCard setShowCard={setShowCard} setPrediction={setPrediction}/>}
               {showCard==2 && <ResponseCard setShowCard={setShowCard} prediction={prediction} setPrediction={setPrediction} />}
               {showPopUp && <PopUp onClose={() => setShowPopUp(false)} popUpType={popUpType} />}
                
            </div>
         </main>
      </div>
   );
};

export default HomePage;
