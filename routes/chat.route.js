import  express  from "express";
import {validatePdf} from "../controllers/pdf.js"
import { sendMessages } from "../controllers/sendMessage.js";
const router = express.Router();

router.post('/getfile', async (req, res) => {
    const response  = await validatePdf();    
    res.send(response);
  });

router.get('/sendMessage/', async  (req, res)=>{
    const msj = req.body
 const resp = await sendMessages(msj).then((response) =>{
 // console.log(response)
    return(response);
    }).catch((error) => {
      return(error)
    });
   
   // console.log(resp)
return resp
    
})

export default router;