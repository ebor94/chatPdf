import axios from "axios"
import qs from "qs"
import fs from "fs"
import FormData from "FormData"
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


export const addPdfUpload = async()=>{
  
  const formData = new FormData();
  formData.append(
    "file",
    fs.createReadStream("./file/chatpdf.pdf")
  );
  
  const options = {
    headers: {
      'x-api-key': 'sec_qjZus5BjZxqDajo5WAe4vfSOGW1cj3ZL', 
      ...formData.getHeaders(),
    },
  };
  
  const response =  axios.post("https://api.chatpdf.com/v1/sources/add-file", formData, options)
    .then((response) => {
      return(JSON.stringify(response.data));
    })
    .catch((error) => {
      return(error);
    });

  return response
}

export const SendMessage = async(msj)=>{
    let data = JSON.stringify(msj);
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.chatpdf.com/v1/chats/message',
        headers: { 
          'x-api-key': 'src_YN9No0i0BQqjPnfveTZ7s', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
    const response =   await axios.request(config)
      .then(async(response) => {
        
      // await  SaveDataChat(data.messages[0].content,data.messages[0].role,response.data.content)
      //console.log(response.data)
        return(response.data);
      })
      .catch((error) => {
        return(error);
      });

      let pregunta  = msj.messages[0].content;
        let rta =  response.content;
        let usr = msj.messages[0].role;
        
        await  SaveDataChat(pregunta,rta,usr)
   return response;   
}


