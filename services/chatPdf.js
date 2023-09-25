import axios from "axios"
import qs from "qs"
import {SaveDataChat} from '../db/saveChat.js'
export  const ValidateFile = async (req, res)=>{

    let data = qs.stringify({
        'url': 'https://www.ceramicaitalia.com/web1/docs/Preguntas Chat Bot.pdf' 
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.chatpdf.com/v1/sources/add-url',
        headers: { 
          'x-api-key': 'sec_qjZus5BjZxqDajo5WAe4vfSOGW1cj3ZL', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
    const response = await axios.request(config)
      .then((response) => {
        return(JSON.stringify(response.data));
      })
      .catch((error) => {
        return(error);
      });

   
return response;

}

export const SendMessage = async(msj)=>{
    let data = JSON.stringify(msj);
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.chatpdf.com/v1/chats/message',
        headers: { 
          'x-api-key': 'sec_qjZus5BjZxqDajo5WAe4vfSOGW1cj3ZL', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
    const response =   await axios.request(config)
      .then((response) => {
        SaveDataChat(data.messages[0].content,data.messages[0].role,response.data.content)
        return(response.data);
      })
      .catch((error) => {
        return(error);
      });
     
   return response;   
}


