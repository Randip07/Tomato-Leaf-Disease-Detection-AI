const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyA1FVpsn45eOSwBEIIm8IlEv1VOhrXU4nA");
// const genAI = new GoogleGenerativeAI("AIzaSyA0gSQYe5HANb8MtupVtcVnWNFQYaV32UM");
const model = genAI.getGenerativeModel({
   model: "gemini-2.5-flash",
   systemInstruction: `You are an expert Agricultural Scientist.For any tomato disease provided, return exactly 5 points. Each point must be a single, short sentence under 15 words. Strict Format: "**Keyword**: One-line actionable cure." No introductory text, no
   concluding remarks, and no bullet points—just the text.`,
});

exports.getCure = async (req, res) => {
   try {
      const { diseaseName } = req.body;
      const prompt = `The tomato plant has been diagnosed with: ${diseaseName}. Please provide 5 cure and management tips.`;

      // Generate the response
      const result = await model.generateContent(prompt);
      const response = await result.response;

      res.json({ text: response.text() });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong with Gemini" });
   }
};
