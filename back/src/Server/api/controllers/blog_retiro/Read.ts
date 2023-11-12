import { Request, Response } from "express";
import { BlogRetiro } from "../../../db/models";

export const Read = async (req: Request, res: Response) => {
    const { body } = req
    const {} = body
    try {
        const tBlogRetiros = await BlogRetiro.findAll()

        return res.status(200).json({ status: 200, msg: "Blog retiro obtenidos con éxito",bag: tBlogRetiros })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer blog retiro del carousel en este momento" })
    }
}