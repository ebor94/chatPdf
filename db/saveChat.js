const sql = require('mssql')
import {config} from '../db/config.js'

export const SaveDataChat = async (pregunta, respuesta , usuario)=>{

 const saveChat = sql.connect(config).then(pool => {   
    return pool.request()
        .input('pregunta', sql.VarChar, pregunta)
        .input('respuesta', sql.VarChar, respuesta)
        .input('usuario', sql.VarChar, usuario)
          .execute('italbotSaveChat')
    }).then(result => {
        console.log(result)
        return result.recordset
    }).catch(err => {
        console.log(err)
        return err
    })

if (saveChat == "REGISTRO EXITOSO"){
    return true
}else{
    return false
}

}