import { response } from 'express';
import {ValidateFile, addPdfUpload} from '../services/chatPdf.js'


export const validatePdf = async() => {
    let response = []; 
    let file  = await addPdfUpload(1);
    let filepacto =  await validatePdfpacto();
    //console.log(file, filepacto)
    response.push(file);
    response.push(filepacto);
  console.log(response)
    return response;
}

 const validatePdfpacto = async() => {
    const response  = await addPdfUpload(2);

    return response;
}
