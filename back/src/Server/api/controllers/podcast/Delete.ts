import { Request, Response } from "express";
import { Podcast } from "../../../db/models";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tPodcast = await Podcast.findByPk(id); 

        if(!tPodcast) return res.status(200).json({status: 400 , msg: "Debe proporcionar un colaborador válido"})

        await tPodcast.destroy()
        return res.status(200).json({status: 200, msg: "Colaborador eliminado"})

    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar colaborador en este momento"})
    }
}