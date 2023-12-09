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
exports.Read = void 0;
const models_1 = require("../../../db/models");
const Read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { lang } = body;
    if (lang != "es" && lang != 'en' && lang != 'cat')
        return res.status(200).json({ status: 400, msg: 'Debe proporcionar un idioma válido ' });
    try {
        const tTestimonios = yield models_1.Testimonio.findAll({
            attributes: ['witness', "id", "createdAt"],
            include: [{
                    model: models_1.DataTestimonio,
                    attributes: [lang]
                }],
            paranoid: true
        });
        if (!tTestimonios)
            return res.status(200).json({ status: 200, msg: "No hay testimonios aun" });
        return res.status(200).json({ status: 200, msg: "Testimonios obtenidos", bag: tTestimonios });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer testimonios en este momento" });
    }
});
exports.Read = Read;
