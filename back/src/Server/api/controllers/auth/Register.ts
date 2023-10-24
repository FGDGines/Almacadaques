import { Request, Response } from "express";
import { DataUser, User } from "../../../db/models";


export const Register = async (req: Request, res: Response) => {
    const { body } = req
    const { nombre, correo, password } = body
    let tDataUser = null
    let tUser = null
    try {
        tDataUser = new DataUser({ nombre, id_rol: 1 })
        await tDataUser.save()

        const id_data_user = tDataUser.id

        tUser = new User({ correo, password, id_data_user })
        await tUser.save()

        return res.status(200).json({ status: 200, msg: "Usuario registrado" })
    } catch (err) {
        try {
            if (tDataUser) {
                tDataUser.destroy()
            }
            return res.status(200).json({ status: 500, err, msg: "No podemos Crear Usuarios en este momento" })
        }catch(err){
            return res.status(200).json({ status: 500, err, msg: "No podemos Crear Usuarios en este momento" })
        }
    }
}