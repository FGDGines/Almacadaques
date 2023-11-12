import { Request, Response } from "express";
import { Podcast } from "../../../db/models";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tPodPodcast = await Podcast.findByPk(id); 

        if(!tPodPodcast) return res.status(200).json({status: 400 , msg: "Debe proporcionar un colaborador válido"})

        await tPodPodcast.destroy()
        return res.status(200).json({status: 200, msg: "Colaborador eliminado"})

    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar colaborador en este momento"})
    }
}