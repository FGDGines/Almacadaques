import { Request, Response } from "express";
import { Colaborador } from "../../../db/models";

export const ReadById = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    try {
        const tCarousels = await Colaborador.findAll({
           where: {
            id: id
           }
        })
        console.log(tCarousels)
        return res.status(200).json({ status: 200, msg: "Items del carousel obtenidos con éxito",bag: tCarousels })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer items del carousel en este momento" })
    }
}