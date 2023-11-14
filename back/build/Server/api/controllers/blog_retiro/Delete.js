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
        const tBlogRetiro = yield models_1.BlogRetiro.findOne({
            where: {
                id: id
            },
            attributes: ['id'],
            include: [
                {
                    model: models_1.TitleLang,
                    attributes: ['id']
                },
                {
                    model: models_1.DescriptionLang,
                    attributes: ['id']
                }
            ]
        });
        if (!tBlogRetiro)
            return res.status(200).json({ status: 400, msg: 'Debe proporcionar un blog retiro válido' });
        const tTitleLang = tBlogRetiro.title_lang;
        const tDescriptionLang = tBlogRetiro.description_lang;
        yield tBlogRetiro.destroy();
        yield tTitleLang.destroy();
        yield tDescriptionLang.destroy();
        return res.status(200).json({ status: 200, msg: "Blog retiro eliminado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos eliminar blog retiro en este momento" });
    }
});
exports.Delete = Delete;
