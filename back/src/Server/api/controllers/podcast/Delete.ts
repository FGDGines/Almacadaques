import { Request, Response } from "express";
import { Podcast } from "../../../db/models";
// import { DeleteFile } from "../../../helpers/FileHandler";
// import path from 'path';
// import { RelativePath } from "../../../config/config";

export const Delete = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id} = body

    try{
        const tPodcast = await Podcast.findByPk(id); 

        if(!tPodcast) return res.status(200).json({status: 400 , msg: "Debe proporcionar un podcast válido"})
        
        // const past = tPodcast.imagen
        // if (past) {
        //     const uploadDir = path.join(__dirname,  RelativePath.podcast)
        //     try {
                
        //     await DeleteFile(path.join(uploadDir, past))     
        //     } catch (error) {
                
        //     }   
        // }
        await tPodcast.destroy()
        return res.status(200).json({status: 200, msg: "Podcast eliminado"})

    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos eliminar podcast en este momento"})
    }
}