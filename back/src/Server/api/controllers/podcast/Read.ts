import { Request, Response } from "express";
import { Podcast } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {} = req
    try{
        const tPodPodcast = await Podcast.findAll(); 
        return res.status(200).json({status: 200, msg: "Colaboradores obtenidos con éxito" , bag: tPodPodcast})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer colaborador en este momento"})
    }
}