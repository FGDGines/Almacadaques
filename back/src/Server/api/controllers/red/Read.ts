import { Request, Response } from "express";
import { Red } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {} = body
    
    try{
        
        const tRed = await Red.findAll();  
        
        return res.status(200).json({status: 200, msg: "Redes obtenidas con éxito" , bag: tRed})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer redes en este momento"})
    }
}