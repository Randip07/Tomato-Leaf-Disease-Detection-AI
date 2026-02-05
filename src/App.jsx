import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";

function App() {
   const [count, setCount] = useState(0);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
      setTimeout(() => {
         setLoading(false)
      }, 2000);
   },[])
   
   return (
      <>
         <div className="">
          {loading? <Loading/>:<HomePage/>}
         </div>
      </>
   );
}

export default App;
