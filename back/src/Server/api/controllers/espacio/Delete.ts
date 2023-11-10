import { Request, Response } from "express";
import { Espacio } from "../../../db/models";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tEspEspacio = await Espacio.findByPk(id); 

        if(!tEspEspacio) return res.status(200).json({status: 400 , msg: "Debe proporcionar un espacio válido "})

        await tEspEspacio.destroy()
        return res.status(200).json({status: 200, msg: "Espacio Eliminado"})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar espacio en este momento"})
    }
}