"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
const models_1 = require("../../../db/models");
const Cloud_1 = require("../../../helpers/Cloud");
require('dotenv').config();
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const tMensaje = new models_1.Mensaje(body);
        yield tMensaje.save();
        const { nombre, correo, fragment, msg } = body;
        const init = {
            topic: `Almacadaques | ${fragment} `,
            body: `\t\tNUEVO MENSAJE\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${msg}`
        };
        (0, Cloud_1.SendMail)(init);
        return res.status(200).json({ status: 200, msg: "Mensaje enviado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos enviar mensajes en este momento " });
    }
});
exports.Create = Create;
