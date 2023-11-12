import { Request, Response } from "express";
import { Podcast } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {} = req
    try{
        const tPodcast = await Podcast.findAll(); 
        return res.status(200).json({status: 200, msg: "Podcast obtenidos con éxito" , bag: tPodcast})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer podcast en este momento"})
    }
}