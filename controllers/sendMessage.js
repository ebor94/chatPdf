import { SendMessage } from "../services/chatPdf.js";


export const sendMessages = async(msj) =>{
    const response  = await SendMessage(msj);    
    return response;

}