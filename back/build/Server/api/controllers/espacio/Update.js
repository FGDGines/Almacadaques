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
exports.Update = void 0;
const models_1 = require("../../../db/models");
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id: primaryKey, text_es, text_en, text_cat } = body;
    const updates = [];
    try {
        const tEspacio = yield models_1.Espacio.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tEspacio)
            return res.status(200).json({ status: 400, msg: "El espacio debe ser válido" });
        if (text_es) {
            const past = tEspacio.text_es;
            yield tEspacio.update({ text_es: text_es });
            updates.push({ path: 'text_es', past, now: text_es });
        }
        if (text_en) {
            const past = tEspacio.text_en;
            yield tEspacio.update({ text_en: text_en });
            updates.push({ path: 'text_en', past, now: text_en });
        }
        if (text_cat) {
            const past = tEspacio.text_cat;
            yield tEspacio.update({ text_cat: text_cat });
            updates.push({ path: 'text_cat', past, now: text_cat });
        }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Espacio editado', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar espacio en este momento" });
    }
});
exports.Update = Update;
