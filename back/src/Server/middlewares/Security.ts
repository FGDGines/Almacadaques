import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

declare global {
    namespace Express {
      interface Request {
        payload: Record<string, any>;
      }
    }
  }

export const security_post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { token } = req.body;
    if (token) {
      const payload = jwt.verify(token, String(process.env.SECRETORPRIVATEKEY)) as Record<string, any>;

      req.payload = payload;

      next();
    } else {
       res.status(200).json({ status: 401, msg: "No dispone de un privilegio requerido" });
    }
  } catch (err) {
      res.status(200).json({ status: 401, msg: "No dispone de un privilegio requerido", err });
  }
};

