import React from "react";

const HeroImage = ({ url }) => {
   return (
      <div className="w-full relative rounded-t-3xl ">
         <img
            src={url?url:"https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="Sample"
            className="rounded-t-3xl object-cover h-[200px] w-full "
         />
         <div className="absolute inset-0 rounded-t-3xl  bg-green-900/20 mix-blend-multiply h-full"></div>
      </div>
   );
};

export default HeroImage;
