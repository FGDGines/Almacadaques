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
    const { id: primaryKey, witness, testimony_es, testimony_en, testimony_cat } = body;
    const updates = [];
    try {
        const tTestimonio = yield models_1.Testimonio.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tTestimonio)
            return res.status(200).json({ status: 200, msg: "Debe proporcionar un testimonio válido" });
        const tDataTestimonio = tTestimonio.data_testimony;
        if (witness) {
            const past = tTestimonio.witness;
            yield tTestimonio.update({ witness });
            updates.push({ path: 'witness', past, now: witness });
        }
        if (testimony_es) {
            const past = tDataTestimonio.es;
            yield tDataTestimonio.update({ es: testimony_es });
            updates.push({ path: 'testimony_es', past, now: testimony_es });
        }
        if (testimony_cat) {
            const past = tDataTestimonio.cat;
            yield tDataTestimonio.update({ cat: testimony_cat });
            updates.push({ path: 'testimony_cat', past, now: testimony_cat });
        }
        if (testimony_en) {
            const past = tDataTestimonio.en;
            yield tDataTestimonio.update({ en: testimony_en });
            updates.push({ path: 'testimony_en', past, now: testimony_en });
        }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Testimonio editado', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar testimonios en este momento" });
    }
});
exports.Update = Update;
