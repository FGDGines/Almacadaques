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
exports.ReadById = void 0;
const models_1 = require("../../../db/models");
const ReadById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = body;
    try {
        const tCarousels = yield models_1.Colaborador.findAll({
            where: {
                id: id
            }
        });
        console.log(tCarousels);
        return res.status(200).json({ status: 200, msg: "Items del carousel obtenidos con éxito", bag: tCarousels });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer items del carousel en este momento" });
    }
});
exports.ReadById = ReadById;
