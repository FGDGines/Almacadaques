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


        if(!tColaborador) return res.status(200).json({status: 200, msg: "Debe colaborador ser válido" })

        // const tDataTestimonio = tTestimonio.data_testimony 

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


        // if(testimony_es){
        //     const past = tDataTestimonio.es
        //     await tDataTestimonio.update({es: testimony_es})

        //     updates.push({path: 'testimony_es' , past , now: testimony_es})
        // }

        // if(testimony_cat){
        //     const past = tDataTestimonio.cat
        //     await tDataTestimonio.update({cat: testimony_cat})

        //     updates.push({path: 'testimony_cat' , past , now: testimony_cat})
        // }

        // if(testimony_en){
        //     const past = tDataTestimonio.en
        //     await tDataTestimonio.update({en: testimony_en})

        //     updates.push({path: 'testimony_en' , past , now: testimony_en})
        // }


        if(updates.length)return res.status(200).json({status: 200, msg: 'Testimonio editado', bag:{updates}})
        return res.status(200).json({status: 200, msg: 'No se han realizado ediciones'})
    }catch(err){
        return res.status(200).json({status: 500, err , msg: "No podemos editar testimonios en este momento"})
    }
}