import { Request, Response } from "express";
import { Mensaje } from "../../../db/models";

export const Create = async (req:Request ,res: Response)=>{
    const {body} = req
    try{
        const tMensaje = new Mensaje(body)
        await tMensaje.save();
        return res.status(200).json({status: 200, msg: "Mensaje enviado"})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos enviar mensajes en este momento "})
    }
}








