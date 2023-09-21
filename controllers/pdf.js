import {ValidateFile} from '../services/chatPdf.js'


export const validatePdf = async() => {
    const response  = await ValidateFile();

    return response;
}
