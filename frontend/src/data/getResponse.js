export const getResponse = async (formData)=>{

    const response = await fetch("http://localhost:8000/api/predict", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        return data;
}