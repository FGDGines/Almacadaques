import { Request, Response } from "express";

export const Send = (req:Request ,res: Response)=>{
    const {body} = req
    
    res.status(200).json({name: "MSG Online" , body})   
}


