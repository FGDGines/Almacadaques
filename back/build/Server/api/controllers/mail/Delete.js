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
exports.Delete = void 0;
const models_1 = require("../../../db/models");
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = body;
    try {
        const tMensaje = yield models_1.Mensaje.findByPk(id);
        if (!tMensaje)
            return res.status(200).json({ status: 400, msg: "Debe proporcionar un mensaje válido " });
        yield tMensaje.destroy();
        return res.status(200).json({ status: 200, msg: "Mensaje Eliminado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos Eliminar Mensajes en este momento" });
    }
});
exports.Delete = Delete;
