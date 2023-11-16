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
    const { text_es, text_en, text_cat } = body;
    try {
        const tEspacio = new models_1.Espacio({ es: text_es, en: text_en, cat: text_cat });
        yield tEspacio.save();
        return res.status(200).json({ status: 200, msg: "Espacio registrado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No se puede crear espacio" });
    }
});
exports.Create = Create;
