import {ValidateFile, addPdfUpload} from '../services/chatPdf.js'


export const validatePdf = async() => {
    const response  = await addPdfUpload();

    return response;
}
