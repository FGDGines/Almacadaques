import { Request, Response } from "express";
import { Carousel, DataCarousel } from "../../../db/models"; 
import { DeleteFile } from "../../../helpers/FileHandler";
import path from 'path';
import { RelativePath } from "../../../config/config";

export const Delete = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = body
    try {
        const tCarousel = await Carousel.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'src'],
            include: [
                {
                    model: DataCarousel,
                    attributes:['id']
                }
            ]
        })

        if(!tCarousel) return res.status(200).json({status: 400, msg: 'Debe proporcionar un Carousel Item Válido'})
        
        const past = tCarousel.src
        if (past) {
            const uploadDir = path.join(__dirname,  RelativePath.carousel)
            try {
                
                await DeleteFile(path.join(uploadDir, past))    
            } catch (error) {
                
            }    
        }
        // @ts-ignore
        // await(DeleteFile(path.join(__dirname , RelativePath.carousel , tCarousel.src) )); 

        const tDataCarousel = tCarousel.data_carousel

        await tCarousel.destroy()
        await tDataCarousel.destroy()

        return res.status(200).json({ status: 200, msg: "Carousel item eliminado"})
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos eliminar Carousel Item en este momento" })
    }
}