export const getResponse = async ()=>{
    const response = await fetch("http://localhost:5000/predict", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        return data;
}