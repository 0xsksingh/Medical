// import React, { useState } from "react";
// import getTextFromImage from "./OCR";
// import FileUploadForm from "./FileUploadForm";

// function Recommendations() {
//   const [recommendations, setRecommendations] = useState("");

//   const getRecommendations = async (text) => {
//     const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer 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"
//       },
//       body: JSON.stringify({
//         prompt: "Given the medical report text, suggest diet and exercise recommendations.",
//         max_tokens: 100,
//         temperature: 0.5,
//         n: 1,
//         stop: ["\n"]
//       })
//     });
//     const data = await response.json();
//     return data.choices[0].text;
//   };

//   const handleUploadComplete = async (file) => {
//     const text = await getTextFromImage(file);
//     const response = await getRecommendations(text);
//     setRecommendations(response);
 
//   };

//   return (
//     <div>
//       <h2>Upload your Medical Report</h2>
//       <FileUploadForm onUploadComplete={handleUploadComplete} />
//       <h2>Recommendations</h2>
//       <p>{recommendations}</p>
//     </div>
//   );
// }

// export default Recommendations;

import React, { useState } from "react";
import getTextFromImage from "./OCR";
import FileUploadForm from "./FileUploadForm";
import axios from "axios";

function Recommendations() {
  const [recommendations, setRecommendations] = useState("");

  const getRecommendations = async (text) => {
    const response = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
      prompt: "Given the medical report text, suggest diet and exercise recommendations.",
      max_tokens: 100,
      temperature: 0.5,
      n: 1,
      stop: ["\n"]
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      }
    });
    return response.data.choices[0].text;
  };

  const handleUploadComplete = async (file) => {
    const text = await getTextFromImage(file);
    const response = await getRecommendations(text);
    setRecommendations(response);
  };

  return (
    <div>
      <h2>Upload your Medical Report</h2>
      <FileUploadForm onUploadComplete={handleUploadComplete} />
      <h2>Recommendations</h2>
      <p>{recommendations}</p>
    </div>
  );
}

export default Recommendations;