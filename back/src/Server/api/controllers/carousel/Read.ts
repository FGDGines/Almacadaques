import { Request, Response } from "express";
import { Carousel, DataCarousel } from "../../../db/models";

export const Read = async (req: Request, res: Response) => {
    const { body } = req
    const { lang } = body


    try {

        if(!['es', 'en' , 'cat'].includes(lang)) return res.status(200).json({status: 400, msg: 'Debe proporcionar un idioma válido'})

        const tCarousels = await Carousel.findAll({
            attributes: ['autor', 'id', 'link_autor', 'src'],
            include: [
                {
                    model:DataCarousel, 
                    attributes:[lang]
                }
            ]
        })

        return res.status(200).json({ status: 200, msg: "Items del carousel obtenidos con éxito",bag: tCarousels })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer items del carousel en este momento" })
    }
}