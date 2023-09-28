import { response } from 'express';
import {ValidateFile, addPdfUpload} from '../services/chatPdf.js'


export const validatePdf = async() => {
    const file  = await addPdfUpload(1);
    const filepacto =  await validatePdfpacto();
    response = file;
    response.push(filepacto);
    return response;
}

 const validatePdfpacto = async() => {
    const response  = await addPdfUpload(2);

    return response;
}
