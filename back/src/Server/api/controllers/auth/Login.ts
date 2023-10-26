import { Request, Response } from "express";
import { User } from "../../../db/models";
import bycrypt from 'bcrypt';
import { generarJwt } from "../../../helpers/Jwt";

export const Login = async (req: Request, res: Response) => {
    const { body } = req
    const { correo, password } = body

    try {

        const tUser = await User.findOne({
            where: {
                correo: correo
            }
        })

        if (tUser && bycrypt.compareSync(password, tUser.password)) {
            
            const token = await generarJwt({id: tUser.id})

            return res.status(200).json({ status: 200, msg: 'Usuario logeado', bag: { token } })
        }


        return res.status(200).json({ status: 400, msg: "Usuario o Contraseña incorrectos" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "" })
    }
}