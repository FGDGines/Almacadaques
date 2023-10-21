import { Request, Response } from "express";
import { Mensaje } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {deleted} = body
    try{
        const tMensajes = await Mensaje.findAll({
            paranoid: (deleted==0)?true:false
        })

        return res.status(200).json({status: 200, msg: "Mensajes Obtenidos con éxito" , bag: tMensajes})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer Mensajes en este momento"})
    }
}