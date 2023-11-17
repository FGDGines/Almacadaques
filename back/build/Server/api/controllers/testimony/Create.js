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
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { witness, testimony_es, testimony_en, testimony_cat } = body;
    try {
        const tDataTestimonio = new models_1.DataTestimonio({ es: testimony_es, cat: testimony_cat, en: testimony_en });
        yield tDataTestimonio.save();
        const tTestimonio = new models_1.Testimonio({ witness, id_data: tDataTestimonio.id });
        yield tTestimonio.save();
        return res.status(200).json({ status: 200, msg: "Testimonio Creado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos crear testimonios en este momento" });
    }
});
exports.Create = Create;
