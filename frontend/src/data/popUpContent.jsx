export const HowItWorks = () => {
   return (
      <section id="how-it-works" className="text-black max-w-2xl gap-5 flex flex-col">
         <p>
            This system allows you to detect tomato leaf diseases easily by uploading a leaf image. The entire process is automated and designed to be simple and fast, even for
            first-time users.
         </p>

         <h3>🧭 Step-by-Step Guide</h3>

         <ol>
            <li>
               <strong>Upload Leaf Image</strong>
               <br />
               Upload a clear image of a tomato leaf (healthy or diseased) from your device.
            </li>

            <li>
               <strong>Image Processing</strong>
               <br />
               The system automatically resizes and preprocesses the image to make it suitable for analysis.
            </li>

            <li>
               <strong>Disease Analysis</strong>
               <br />
               The uploaded image is analyzed using trained deep learning models that examine color patterns, spots, and leaf texture.
            </li>

            <li>
               <strong>Prediction Result</strong>
               <br />
               The system predicts the detected disease (or healthy condition) along with a confidence score.
            </li>

            <li>
               <strong>View Disease Information</strong>
               <br />
               Basic information related to the detected disease is displayed to help you understand the result.
            </li>
         </ol>

         <h3 className="font-bold">⚙️ How the Detection Works</h3>

         <p>
            The system uses deep learning models trained on thousands of tomato leaf images collected from different disease datasets. When an image is uploaded, it is compared
            against these learned patterns, and the most accurate disease category is selected as the final prediction.
         </p>
      </section>
   );
};

// export default HowItWorks;

export const DiseaseLibrary = () => {
   return (
      <section id="disease-library" className="text-black max-w-2xl gap-5 flex flex-col">
         <h2>🌿 Welcome to the Disease Library</h2>

         <p>
            The Disease Library is your guide to understanding common tomato leaf diseases and learning which conditions this system is capable of detecting. Explore the diseases
            listed below to recognize their visual symptoms and better understand the prediction results.
         </p>

         <p>
            Our detection system has been trained using multiple tomato leaf disease datasets containing thousands of labeled images. Based on this training, the system can
            identify the following tomato leaf conditions.
         </p>

         <h3>🦠 Diseases Detected by This System</h3>

         <ul>
            <li>
               <strong>Early Blight</strong> – Brown circular spots with concentric ring patterns, usually appearing on older leaves.
            </li>
            <li>
               <strong>Late Blight</strong> – Large dark or water-soaked patches that spread rapidly across the leaf surface.
            </li>
            <li>
               <strong>Septoria Leaf Spot</strong> – Small gray or brown spots with dark margins, commonly affecting lower leaves.
            </li>
            <li>
               <strong>Bacterial Spot</strong> – Small water-soaked lesions that later turn dark and rough.
            </li>
            <li>
               <strong>Leaf Mold</strong> – Yellow patches on the upper leaf surface with mold-like growth underneath.
            </li>
            <li>
               <strong>Target Spot</strong> – Circular lesions with distinct target-like concentric rings.
            </li>
            <li>
               <strong>Tomato Mosaic Virus</strong> – Mottled or mosaic-like leaf patterns along with distorted growth.
            </li>
            <li>
               <strong>Tomato Yellow Leaf Curl Virus</strong> – Upward curling of leaves accompanied by yellow discoloration.
            </li>
            <li>
               <strong>Spider Mite Damage</strong> – Fine speckling on leaves and web-like structures on the underside.
            </li>
            <li>
               <strong>Healthy Leaf</strong> – No visible disease symptoms, indicating a healthy plant condition.
            </li>
         </ul>

         <p>
            📸 <strong>Have a tomato leaf image?</strong> Upload it now and let the system analyze the leaf to instantly detect the disease and show the result.
         </p>
      </section>
   );
};
