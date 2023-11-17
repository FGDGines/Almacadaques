import { Request, Response } from "express";
import { Espacio } from "../../../db/models"; 

export const Create = async (req: Request, res: Response) => {
    const { body } = req
    const {text_es, text_en, text_cat} = body
    try {
        const tEspacio = new Espacio({ es: text_es, en: text_en, cat: text_cat })
        await tEspacio.save();
 
        return res.status(200).json({ status: 200, msg: "Espacio registrado" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear espacio" })
    }
}








