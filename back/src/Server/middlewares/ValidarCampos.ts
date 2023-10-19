import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validarCampos = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const msg = errors.array()[0].msg; // Cambiamos errors.errors a errors.array()
        return res.status(400).json({ status: '400', msg, errors: errors.array() }); // Cambiamos 200 a 400
    }
    next();
    return;
};

export { validarCampos };
