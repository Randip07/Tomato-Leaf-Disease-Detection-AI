import Loading from "./Loading";

const ResponseCard = ({ setShowCard, prediction, setPrediction }) => {
   const scanAnotherImage = () => {
      setShowCard("1");
      setPrediction(null);
   };

   return (
      <div className="w-full md:w-1/2 bg-[#8D6E63] flex flex-col items-center justify-center p-6 md:p-8 lg:px-20 lg:py-10 gap-5 rounded-r-3xl">
         {!prediction ? (
            <Loading />
         ) : (
            <>
               <div className="bg-[#f63c0e] p-5 w-full rounded-2xl">
                  <h1 className="text-xl font-semibold text-gray-100">Disease Detected : {prediction?.disease}</h1>
               </div>
               {/* The Dashed Upload Box */}
               <div className="w-full max-w-xl bg-[#2E7D32] rounded-3xl border-[3px] border-dashed border-white/40 p-8 md:pt-12 flex flex-col items-start text-center text-white space-y-6 shadow-lg">
                  <h1 className="text-2xl  font-semibold">General Care Tips</h1>

                  {/* <span className="text-lg opacity-80">or</span> */}

                  {/* The main call to action button */}
                  <div className="w-full m-0">
                     <button
                        onClick={scanAnotherImage}
                        className="w-full sm:w-auto bg-[#8D6E63] hover:bg-[#7a5e53] text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none cursor-pointer"
                     >
                        Scan Another Image
                     </button>
                  </div>

                  {/* Hidden file input field for functionality later */}
                  <input type="file" id="file-upload" className="hidden" accept="image/png, image/jpeg" />
               </div>
            </>
         )}
      </div>
   );
};

export default ResponseCard;
