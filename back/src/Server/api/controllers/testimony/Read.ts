import { Request, Response } from "express";
import { Testimonio , DataTestimonio} from "../../../db/models";

export const Read = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {lang} = body

    if(lang != "es" && lang != 'en' && lang != 'cat')return res.status(200).json({status: 400, msg: 'Debe proporcionar un idioma válido '})

    try{
        const tTestimonios = await Testimonio.findAll({
            attributes:['witness', "id", "createdAt"] , 
            include:[{
                model: DataTestimonio, 
                attributes:[lang]            
            }], 
            paranoid: true
        })

        if(!tTestimonios) return res.status(200).json({status: 200, msg: "No hay testimonios aun"})

        return res.status(200).json({status: 200, msg: "Testimonios obtenidos", bag: tTestimonios})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos leer testimonios en este momento"})
    }
}