import React, { useState } from "react";
import getTextFromImage from "./OCR";

function FileUploadForm({ onUploadComplete }) {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
    console.log(File);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("HIHIH");
    if (!file) {
      console.log("no file selected");
      return;
    }

    const text = await getTextFromImage(file);
    onUploadComplete(text);

    //onUploadComplete(file);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="report-upload">Upload Medical Report (PDF or Image)</label>
        <input
          type="file"
          id="report-upload"
          // accept="image/*,.pdf"
          onChange={handleFileInputChange}
        />
      </div>
      <button type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default FileUploadForm;