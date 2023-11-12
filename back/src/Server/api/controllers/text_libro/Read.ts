import { Request, Response } from "express";
import { TextLibro } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {} = req
    try{
        const tTextLibro = await TextLibro.findAll(); 
        return res.status(200).json({status: 200, msg: "Colaboradores obtenidos con éxito" , bag: tTextLibro})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer colaborador en este momento"})
    }
}