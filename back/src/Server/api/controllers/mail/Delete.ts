import { Request, Response } from "express";
import { Mensaje } from "../../../db/models";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tMensaje = await Mensaje.findByPk(id); 

        if(!tMensaje) return res.status(200).json({status: 400 , msg: "Debe proporcionar un mensaje válido "})

        await tMensaje.destroy()
        return res.status(200).json({status: 200, msg: "Mensaje Eliminado"})

    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos Eliminar Mensajes en este momento"})
    }
}