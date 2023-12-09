import { Request, Response } from "express";
import { DataUser, User } from "../../../db/models";
import bycrypt from 'bcrypt'
import { UploadFile } from "../../../helpers/FileHandler";
import path from "path"
import { Formatos, RelativePath } from "../../../config/config";

export const Register = async (req: Request, res: Response) => {
    const { body } = req
    const { nombre, correo, password, fileExtension } = body
    let tDataUser = null
    let tUser = null
    try {
        // @ts-ignore
        const image = req.files.src
        if (image) {
            const url = await UploadFile( image.data, path.join(__dirname,  RelativePath.auth), fileExtension, Formatos.image)
            tDataUser = new DataUser({ nombre, id_rol: 1, src: url })
            await tDataUser.save()

            const id_data_user = tDataUser.id

            tUser = new User({ correo, password, id_data_user })
            const salt = bycrypt.genSaltSync(10)
            const password_hash = bycrypt.hashSync(password , salt)
            tUser.password = password_hash
            await tUser.save()

            return res.status(200).json({ status: 200, msg: "Usuario registrado" })
        } else {
            return res.status(200).json({ status: 200, msg: "Necesario foto" })
        }
        
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