import React, { use, useState } from "react";
import NavBar from "../components/NavBar";
import PopUp from "../components/Popup";
import Loading from "../components/Loading";
import LeftCardHero from "../components/LeftCardHero";
import ResponseCard from "../components/ResponseCard";

const Response = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState("")

    

   return (
      <div className="min-h-screen w-full flex flex-col font-sans bg-gray-100 ">
         {/* ================= Navigation Bar ================= */}
         <NavBar setShowPopUp = {setShowPopUp} setPopUpType= {setPopUpType} />

         {/* ================= Main Hero Content ================= */}
         <main className="flex justify-center mt-5">
            <div className="flex flex-col md:flex-row w-3/4">
               <LeftCardHero/>
               <ResponseCard/>
               {showPopUp && <PopUp onClose={() => setShowPopUp(false)} popUpType={popUpType} />}
                
            </div>
         </main>
      </div>
   );
};

export default Response;
