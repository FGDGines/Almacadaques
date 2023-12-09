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
exports.Update = void 0;
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const path_1 = __importDefault(require("path"));
const config_1 = require("../../../config/config");
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id, title_es, title_en, title_cat, description_es, description_en, description_cat, index, day, month, year, estado, image_number, author } = body;
    const updates = [];
    try {
        const tBlogRetiro = yield models_1.BlogRetiro.findOne({
            where: {
                id: id
            },
            attributes: ["id", "indice", "day", "month", "year", "image", "author", "estado"],
            include: [
                {
                    model: models_1.TitleLang
                },
                {
                    model: models_1.DescriptionLang,
                    attributes: ['id']
                }
            ]
        });
        if (!tBlogRetiro)
            return res.status(200).json({ status: 404, msg: 'No existe blog registo con el id ' + id });
        const tTitleLang = tBlogRetiro.title_lang;
        const tDescriptionLang = tBlogRetiro.description_lang;
        if (title_es) {
            const past = tTitleLang.title_es;
            yield tTitleLang.update({ es: title_es });
            updates.push({ path: 'title_es', past, now: title_es });
        }
        if (title_en) {
            const past = tTitleLang.title_en;
            yield tTitleLang.update({ en: title_en });
            updates.push({ path: 'title_en', past, now: title_en });
        }
        if (title_cat) {
            const past = tTitleLang.title_cat;
            yield tTitleLang.update({ cat: title_cat });
            updates.push({ path: 'title_cat', past, now: title_cat });
        }
        if (description_es) {
            const past = tDescriptionLang.description_es;
            yield tDescriptionLang.update({ es: description_es });
            updates.push({ path: 'description_es', past, now: description_es });
        }
        if (description_en) {
            const past = tDescriptionLang.description_en;
            yield tDescriptionLang.update({ en: description_en });
            updates.push({ path: 'description_en', past, now: description_en });
        }
        if (description_cat) {
            const past = tDescriptionLang.description_cat;
            yield tDescriptionLang.update({ cat: description_cat });
            updates.push({ path: 'description_cat', past, now: description_cat });
        }
        if (index) {
            const past = tBlogRetiro.index;
            yield tBlogRetiro.update({ index: index });
            updates.push({ path: 'indice', past, now: index });
        }
        if (day) {
            const past = tBlogRetiro.day;
            yield tBlogRetiro.update({ day: day });
            updates.push({ path: 'day', past, now: day });
        }
        if (month) {
            const past = tBlogRetiro.month;
            yield tBlogRetiro.update({ month: month });
            updates.push({ path: 'month', past, now: month });
        }
        if (year) {
            const past = tBlogRetiro.year;
            yield tBlogRetiro.update({ year: year });
            updates.push({ path: 'year', past, now: year });
        }
        if (estado) {
            const past = tBlogRetiro.estado;
            yield tBlogRetiro.update({ estado: estado });
            updates.push({ path: 'estado', past, now: estado });
        }
        try {
            // @ts-ignore
            const image = req.files.src.data;
            if (image) {
                const past = tBlogRetiro.image;
                const json = JSON.parse(past);
                if (json.length <= image_number) {
                    return res.status(200).json({ status: 400, msg: "Número de la imagen no válido" });
                }
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.blog_retiro);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, json[image_number]));
                    }
                    catch (error) { }
                }
                const url = yield (0, FileHandler_1.UploadFile)(image, path_1.default.join(__dirname, config_1.RelativePath.blog_retiro), "jpg", config_1.Formatos.image);
                json[image_number] = url;
                yield tBlogRetiro.update({ image: json });
                updates.push({ path: 'image', past, now: json });
            }
        }
        catch (error) { }
        if (author) {
            const past = tBlogRetiro.author;
            yield tBlogRetiro.update({ author: author });
            updates.push({ path: 'author', past, now: author });
        }
        return res.status(200).json({ status: 200, msg: "Updated", bag: { updates } });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar blog_retiro en este momento" });
    }
});
exports.Update = Update;
