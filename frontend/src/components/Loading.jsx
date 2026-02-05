import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
   return (
      <div className="flex flex-col justify-center items-center">
         <div className="h-30">
            <DotLottieReact src="https://lottie.host/8f5c6dca-c818-43c0-94b5-ec6ff5a2dcb9/xvfBzUAA9p.lottie" loop autoplay />
         </div>
         <h1 className="text-xl font-bold font-sans mt-2">Please Wait.....</h1>
      </div>
   );
}
