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
const config_1 = require("../../../config/config");
const path_1 = __importDefault(require("path"));
const models_1 = require("../../../db/models");
const FileHandler_1 = require("../../../helpers/FileHandler");
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id: primaryKey, url, cuenta } = body;
    const updates = [];
    try {
        const tRed = yield models_1.Red.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tRed)
            return res.status(200).json({ status: 400, msg: "La red debe ser válida" });
        if (url) {
            const past = tRed.url;
            yield tRed.update({ url: url });
            updates.push({ path: 'url', past, now: url });
        }
        if (cuenta) {
            const past = tRed.cuenta;
            yield tRed.update({ cuenta: cuenta });
            updates.push({ path: 'cuenta', past, now: cuenta });
        }
        try {
            // @ts-ignore
            const imagen = req.files.src.data;
            if (imagen) {
                const past = tRed.archivo;
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.red);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
                    }
                    catch (error) { }
                }
                const img = yield (0, FileHandler_1.UploadFile)(imagen, path_1.default.join(__dirname, config_1.RelativePath.red), "jpg", config_1.Formatos.image);
                yield tRed.update({ archivo: img });
                updates.push({ path: 'archivo', past, now: img });
            }
        }
        catch (error) { }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Red editada', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar red en este momento" });
    }
});
exports.Update = Update;
