import Loading from "./Loading";
import ShowCure from "./showCure";

const ResponseCard = ({ setShowCard, prediction, setPrediction, setUrl, setCure }) => {
   

   return (
      <div className="w-full flex flex-col items-center justify-center mt-4 rounded-b-3xl">
         {!prediction ? (
            <Loading  />
         ) : (
            <>
               <div className=" p-5 w-full rounded-2xl bg-gradient-to-tr from-black to-red-600">
                  <h1 className="text-xl font-extrabold text-center text-gray-100">{prediction?.disease} Detected</h1>
               </div>
               
            </>
         )}
      </div>
   );
};

export default ResponseCard;
