// import Tesseract from "tesseract.js";

// const getTextFromImage = async (file:any) => {
//   try{
//     const { data } = await Tesseract.recognize(file, "eng");
//     return data.text;
//   }catch(error){
//     console.error(error);
//     return "";
//   }
// };
 

// export default getTextFromImage;

import { createWorker } from 'tesseract.js';

const getTextFromImage = async (file) => {
  try {
    const worker = await createWorker({
      logger: m => console.log(m),
    });
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(file);
    await worker.terminate();
    return text;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default getTextFromImage;
