import  Express  from "express";
import bodyParser from "body-parser";
import Getfile from "./routes/chat.route.js";
//import sendMessage  from "./routes/chat.route.js";
import  {sendMessages}  from "./controllers/sendMessage.js";
const app = Express();
const port  = 3000
app.use((req, res, next) => {

    // Dominio que tengan acceso 
       res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Encabecedados que permites 
       res.setHeader('Access-Control-Allow-Headers', '*');
    
    next();
    })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/getfile/',Getfile) 

app.post('/sendMessage/', async (req,res)=>{
   console.log(req.body)
  const response =  await sendMessages(req.body)
  res.send(response);
}) 
 app.listen(port, () => {
    console.log(`chatPdf listening on port ${port}`)
  })