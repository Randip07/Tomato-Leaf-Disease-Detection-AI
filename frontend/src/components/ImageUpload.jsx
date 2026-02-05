import { useState } from "react";
import { getResponse } from "../data/getResponse";

const ImageUpload = ({setPreview, image, setImage}) => {
//    const [image, setImage] = useState(null);
//    const [preview, setPreview] = useState(null);
   const [loading, setLoading] = useState(false);
   const [result, setResult] = useState(null);

   const handleImageChange = (e) => {
      const file = e.target.files[0];

      if (!file) return;

      setImage(file);
      setPreview(URL.createObjectURL(file));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!image) {
         alert("Please upload an image first");
         return;
      }

      const formData = new FormData();
      formData.append("image", image); // key must match backend

      try {
        setLoading(true);
        const res = await getResponse(formData)
        console.log(res);
        
        
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image");
      } finally {
        setLoading(false);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label
               className="flex flex-col items-center justify-center px-10 py-2 border-2 border-dashed border-green-500 rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition"
            >
               <p className="text-green-700 font-semibold">Click to upload </p>
               <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG supported</p>

               <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>

            <br />

            

            <br />

            <button type="submit" className="w-full sm:w-auto bg-[#8D6E63] hover:bg-[#7a5e53] text-white text-lg font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none cursor-pointer">Detect Disease</button>
         </form>
      </div>
   );
};

export default ImageUpload;
