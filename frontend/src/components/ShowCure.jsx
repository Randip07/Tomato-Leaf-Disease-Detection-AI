import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ShowCure = ({ rawText }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // 1. Extract the actual string safely
  const fullText = rawText?.text || "";

  // 2. RESET Logic: When fullText changes, start over
  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [fullText]); // This dependency ensures reset on every new generation

  // 3. Typing Logic
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 15); // Slightly faster for better UX
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  if (!fullText) return null;

  // 4. Parse the currently "typed" text into lines
  const points = displayedText
    .split('\n')
    .filter(line => line.trim().length > 0);

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-gray-100 py-6 px-4 mb-10">
      <h2 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
        <CheckCircle2 className="text-green-500" /> 
        Here is Your Treatment Guide
      </h2>

      <div className="space-y-4">
        {points.map((point, idx) => {
          const parts = point.split(':');
          const keyword = parts[0];
          const action = parts.slice(1).join(':');
          
          return (
            <div key={idx} className="group flex items-center gap-4 p-3 rounded-xl bg-green-50 border border-green-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-sm">
                {idx + 1}
              </span>

              <p className="text-gray-700 text-sm md:text-base leading-snug">
                <span className="font-bold text-gray-900">
                  {keyword.replace(/\*/g, '').trim()}:
                </span>
                {action ? ` ${action.trim()}` : ''}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowCure;