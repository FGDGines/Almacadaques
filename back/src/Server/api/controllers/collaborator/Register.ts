import { Request, Response } from "express";
import { Colaborador } from "../../../db/models"; 

export const Register = async (req: Request, res: Response) => {
    const { body } = req
    try {
        const tColaborador = new Colaborador(body)
        await tColaborador.save();
 
        return res.status(200).json({ status: 200, msg: "Colaborador registrado" })
    } catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear colaborador" })
    }
}








