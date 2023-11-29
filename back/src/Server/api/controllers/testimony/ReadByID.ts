import { Request, Response } from "express";
import { Testimonio , DataTestimonio} from "../../../db/models";

export const ReadById = async ( req: Request ,res: Response)=>{
    const {body} = req
    const { id } = body
    try{
        const tTestimonios = await Testimonio.findAll({
            where: {
                id: id
            }, 
            attributes:['witness', "id", "createdAt"] , 
            include:[{
                model: DataTestimonio, 
                attributes:["es", "en", "cat"]            
            }], 
            paranoid: true
        })
        console.log(1)

        if(!tTestimonios) return res.status(200).json({status: 200, msg: "No hay testimonios aun"})

        return res.status(200).json({status: 200, msg: "Testimonios obtenidos", bag: tTestimonios})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer testimonios en este momento"})
    }
}