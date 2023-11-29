import { Request, Response } from "express";
import { Carousel, DataCarousel } from "../../../db/models";

export const ReadById = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    try {
        const tCarousels = await Carousel.findAll({
            where: {
                id: id
            },
            attributes: ['autor', 'id', 'link_autor', 'src'],
            include: [
                {
                    model:DataCarousel, 
                    attributes:["es", "en", "cat"]
                }
            ]
        })

        return res.status(200).json({ status: 200, msg: "Items del carousel obtenidos con éxito",bag: tCarousels })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer items del carousel en este momento" })
    }
}