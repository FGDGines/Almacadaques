import { Request, Response } from "express";
import { TextLibro } from "../../../db/models";
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';
import { Formatos, RelativePath } from "../../../config/config";

export const Register = async (req: Request, res: Response) => {
    const { body } = req
    try { 
        // @ts-ignore
        if (req.files.src.data) {
            // @ts-ignore
            const url = await UploadFile( req.files.src.data, path.join(__dirname,  RelativePath.text_libro), "jpg", Formatos.image)
             
            const tTextLibro = new TextLibro({
                ...body,
                imagen_src: url
            })
            await tTextLibro.save();
            return res.status(200).json({ status: 200, msg: "Podcast registrado", bag: tTextLibro})
        }
        return res.status(200).json({ status: 400, msg: "Debe pasar una imagen"})
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear podcast" })
    }
}