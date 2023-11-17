import { Request, Response } from "express";
import { Formatos, RelativePath } from "../../../config/config";
import { Red } from "../../../db/models"; 
import { UploadFile } from "../../../helpers/FileHandler";
import path from 'path';

export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const {} = body
    try {
        // @ts-ignore
        const image = req.files.src.data 
        if (image) {
            const img = await UploadFile( image, path.join(__dirname,  RelativePath.red), "jpg", Formatos.image)
            
            const tRed = new Red({
                ...body,
                archivo: img
            })
            await tRed.save();
            return res.status(200).json({ status: 200, msg: "Red registrada", bag: tRed})
        }
        return res.status(200).json({ status: 400, msg: "El archivo es obligatorio" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear red" })
    }
}








