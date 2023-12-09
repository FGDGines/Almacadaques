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
        const tBlogRetiros = yield models_1.BlogRetiro.findAll({
            where: {
                id: id
            },
            attributes: ["id", "indice", "day", "month", "year", "image", "author", "estado"],
            include: [
                {
                    model: models_1.TitleLang,
                    attributes: ["es", "en", "cat"]
                },
                {
                    model: models_1.DescriptionLang,
                    attributes: ["es", "en", "cat"]
                }
            ]
        });
        return res.status(200).json({ status: 200, msg: "Blog retiro obtenidos con éxito", bag: tBlogRetiros });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos leer blog retiro en este momento" });
    }
});
exports.ReadById = ReadById;
