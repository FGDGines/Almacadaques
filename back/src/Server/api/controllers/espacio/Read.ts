import { Request, Response } from "express";
import { Espacio } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {body} = req
    const { lang } = body
    
    try{
        const tEspacio = await Espacio.findAll({
            attributes:[lang]
        });  
        
        return res.status(200).json({status: 200, msg: "Espacios obtenidos con éxito" , bag: tEspacio})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer espacios en este momento"})
    }
}