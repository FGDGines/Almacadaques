import { Request, Response } from "express";
import { Carousel, DataCarousel } from "../../../db/models";

export const Update = async (req: Request, res: Response) => {
    const { body } = req
    const { id} = body

    try {
        const tCarousels = await Carousel.findOne({
            where:{
                id:id
            },
            include: [
                {
                    model: DataCarousel,
                }
            ]
        })

        if(!tCarousels) return res.status(200).json({status: 404 , msg: 'No existe carousel con el id ' + id})

        return res.status(200).json({status: 200, msg: "Updated" , tCarousels})

    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "" })
    }
}