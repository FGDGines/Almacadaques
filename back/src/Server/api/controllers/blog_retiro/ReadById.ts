import { Request, Response } from "express";
import { BlogRetiro, DescriptionLang, TitleLang } from "../../../db/models";

export const ReadById = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    try {
        const tBlogRetiros = await BlogRetiro.findAll({
            where: {
                id: id
            },
            attributes: ["id", "indice", "day", "month", "year", "image", "author", "estado"],
            include: [
                {
                    model: TitleLang,
                    attributes:["es", "en", "cat"]
                },
                {
                    model: DescriptionLang,
                    attributes:["es", "en", "cat"]
                }
            ]
        })

        return res.status(200).json({ status: 200, msg: "Blog retiro obtenidos con éxito",bag: tBlogRetiros })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer blog retiro en este momento" })
    }
}