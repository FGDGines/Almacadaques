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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = body;
    try {
        const tBlogRetiro = yield models_1.BlogRetiro.findOne({
            where: {
                id: id
            },
            attributes: ['id', "image"],
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
        const past = tBlogRetiro.image;
        const json = JSON.parse(past);
        if (json.length > 0) {
            for (let index = 0; index < json.length; index++) {
                const element = json[index];
                const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.blog_retiro);
                try {
                    yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, element));
                }
                catch (error) { }
            }
        }
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
