import { Request, Response } from "express";
import { Podcast } from "../../../db/models";
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";

export const Register = async (req: Request, res: Response) => {
    const { body } = req
    try { 
        // @ts-ignore
        if (req.files.src.data) {
            // @ts-ignore
            const url = await UploadFile( req.files.src.data, path.join(__dirname,  RelativePath.podcast), "jpg", Formatos.image)
             
            const tPodcast = new Podcast({
                ...body,
                imagen: url
            })
            await tPodcast.save();
            return res.status(200).json({ status: 200, msg: "Podcast registrado", bag: tPodcast})
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen"})
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear podcast" })
    }
}