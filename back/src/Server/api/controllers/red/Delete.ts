import { Request, Response } from "express";
import { Red } from "../../../db/models";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tRed = await Red.findByPk(id); 

        if(!tRed) return res.status(200).json({status: 400 , msg: "Debe proporcionar una red válida"})

        await tRed.destroy()
        return res.status(200).json({status: 200, msg: "Red Eliminada"})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar red en este momento"})
    }
}