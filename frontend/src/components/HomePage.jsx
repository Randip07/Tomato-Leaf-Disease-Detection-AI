import React, { use, useState } from "react";
import { Camera, Leaf } from "lucide-react";
import NavBar from "./NavBar";
import UploadCard from "./UploadCard";
import LeftCardHero from "./LeftCardHero";
import PopUp from "./Popup";

const HomePage = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpType, setPopUpType] = useState("")

//     

   return (
      <div className="min-h-screen w-full flex flex-col font-sans bg-gray-100 ">
         {/* ================= Navigation Bar ================= */}
         <NavBar setShowPopUp = {setShowPopUp} setPopUpType= {setPopUpType} />

         {/* ================= Main Hero Content ================= */}
         <main className="flex justify-center mt-5">
            <div className="flex flex-col md:flex-row w-3/4 h-2/3 ">
               <LeftCardHero />

               {/* --- Right Side: Upload Action Area --- */}
               <UploadCard />
               {showPopUp && <PopUp onClose={() => setShowPopUp(false)} popUpType={popUpType} />}
                
            </div>
         </main>
      </div>
   );
};

export default HomePage;
