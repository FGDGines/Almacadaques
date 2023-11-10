import { Request, Response } from "express";
import { Colaborador } from "../../../db/models";

export const Update = async ( req: Request ,res: Response)=>{
    const {body} = req
    const {id:primaryKey, nombre, cargo, descripcion, imagen, contacto} = body
    const updates = []
    try{

        const tColaborador = await Colaborador.findOne({
            where: {
                id : primaryKey  , 
            }, 
            include: [{all:true}]
        })

        if(!tColaborador) return res.status(400).json({status: 400, msg: "El colaborador debe ser válido" })

        if(nombre){
            const past = tColaborador.nombre
            await tColaborador.update({nombre: nombre})
            updates.push({path: 'nombre', past , now: nombre})
        }

        if(cargo){
            const past = tColaborador.cargo
            await tColaborador.update({cargo: cargo})
            updates.push({path: 'cargo', past , now: cargo})
        }

        if(descripcion){
            const past = tColaborador.descripcion
            await tColaborador.update({descripcion: descripcion})
            updates.push({path: 'descripcion', past , now: descripcion})
        }

        if(imagen){
            const past = tColaborador.imagen
            await tColaborador.update({imagen: imagen})
            updates.push({path: 'imagen', past , now: imagen})
        }

        if(contacto){
            const past = tColaborador.contacto
            await tColaborador.update({contacto:contacto})
            updates.push({path: 'contacto', past , now:contacto})
        }

        if(updates.length)return res.status(200).json({status: 200, msg: 'Colaborador editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar colaborador en este momento"})
    }
}