import { Request, Response } from "express";
import { Espacio } from "../../../db/models";

export const ReadByID = async ( req: Request ,res: Response)=>{
    const {body} = req
    const { id } = body
  
    try{
        const tEspacio = await Espacio.findAll({
            where: {
                id: id
            }
        });  
        
        return res.status(200).json({status: 200, msg: "Espacios obtenidos con éxito" , bag: tEspacio})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer espacios en este momento"})
    }
}