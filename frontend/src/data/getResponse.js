export const getResponse = async (formData) => {
   const response = await fetch("http://localhost:8000/api/predict", {
      method: "POST",
      body: formData,
   });

   const data = await response.json();
   return data;
};

export const getCure = async (disease) => {

   try {
      const response = await fetch("http://localhost:8000/api/getCure", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ diseaseName: disease }),
      });

      const data = await response.json();

      return data;

   } catch (err) {
      console.error("Connection failed:", err);
   }
};