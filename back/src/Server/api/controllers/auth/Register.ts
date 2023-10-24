import { Request, Response } from "express";
import { DataUser, User } from "../../../db/models";
import bycrypt from 'bcrypt'


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
        const salt = bycrypt.genSaltSync(10)
        const password_hash = bycrypt.hashSync(password , salt)
        tUser.password = password_hash
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