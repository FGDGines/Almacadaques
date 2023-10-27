import { Request, Response } from "express";
import { Testimonio } from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {} = body

    try{
        const tTestimonios = await Testimonio.findAll({
            include:[{all:true}], 
            paranoid: true
        })

        if(!tTestimonios) return res.status(200).json({status: 200, msg: "No hay testimonios aun"})

        return res.status(200).json({status: 200, msg: "Testimonios obtenidos", bag: tTestimonios})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer testimonios en este momento"})
    }
}