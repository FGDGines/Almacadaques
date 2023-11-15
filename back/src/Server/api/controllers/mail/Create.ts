import { Request, Response } from "express";
import { Mensaje } from "../../../db/models";
import { SendMail } from "../../../helpers/Cloud";
require('dotenv').config()

export const Create = async (req: Request, res: Response) => {
    const { body } = req
    try {
        const tMensaje = new Mensaje(body)
        await tMensaje.save();

        const { nombre, correo, fragment, msg } = body

        const init = {
            topic: `Almacadaquest | ${fragment} `,
            body: `\t\tNUEVO MENSAJE\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${msg}`
        }
        console.log(1)
        SendMail(init)
        console.log(2)
        return res.status(200).json({ status: 200, msg: "Mensaje enviado" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos enviar mensajes en este momento " })
    }
}








