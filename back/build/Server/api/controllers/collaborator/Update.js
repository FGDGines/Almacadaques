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
    const { id: primaryKey, nombre_es, cargo_es, descripcion_es, nombre_en, cargo_en, descripcion_en, nombre_cat, cargo_cat, descripcion_cat, contacto } = body;
    const updates = [];
    try {
        const tColaborador = yield models_1.Colaborador.findOne({
            where: {
                id: primaryKey,
            },
            include: [{ all: true }]
        });
        if (!tColaborador)
            return res.status(200).json({ status: 400, msg: "El colaborador debe ser válido" });
        if (nombre_es) {
            const past = tColaborador.nombre_es;
            yield tColaborador.update({ nombre_es: nombre_es });
            updates.push({ path: 'nombre_es', past, now: nombre_es });
        }
        if (cargo_es) {
            const past = tColaborador.cargo_es;
            yield tColaborador.update({ cargo_es: cargo_es });
            updates.push({ path: 'cargo_es', past, now: cargo_es });
        }
        if (descripcion_es) {
            const past = tColaborador.descripcion_es;
            yield tColaborador.update({ descripcion_es: descripcion_es });
            updates.push({ path: 'descripcion_es', past, now: descripcion_es });
        }
        if (nombre_en) {
            const past = tColaborador.nombre_en;
            yield tColaborador.update({ nombre_en: nombre_en });
            updates.push({ path: 'nombre_en', past, now: nombre_en });
        }
        if (cargo_en) {
            const past = tColaborador.cargo_en;
            yield tColaborador.update({ cargo_en: cargo_en });
            updates.push({ path: 'cargo_en', past, now: cargo_en });
        }
        if (descripcion_en) {
            const past = tColaborador.descripcion_en;
            yield tColaborador.update({ descripcion_en: descripcion_en });
            updates.push({ path: 'descripcion_en', past, now: descripcion_en });
        }
        if (nombre_cat) {
            const past = tColaborador.nombre_cat;
            yield tColaborador.update({ nombre_cat: nombre_cat });
            updates.push({ path: 'nombre_cat', past, now: nombre_cat });
        }
        if (cargo_cat) {
            const past = tColaborador.cargo_cat;
            yield tColaborador.update({ cargo_cat: cargo_cat });
            updates.push({ path: 'cargo_cat', past, now: cargo_cat });
        }
        if (descripcion_cat) {
            const past = tColaborador.descripcion_cat;
            yield tColaborador.update({ descripcion_cat: descripcion_cat });
            updates.push({ path: 'descripcion_cat', past, now: descripcion_cat });
        }
        try {
            // @ts-ignore
            const imagen = req.files.src.data;
            if (imagen) {
                const past = tColaborador.imagen;
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.collaborator);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
                    }
                    catch (error) {
                    }
                }
                const url = yield (0, FileHandler_1.UploadFile)(imagen, path_1.default.join(__dirname, config_1.RelativePath.collaborator), "jpg", config_1.Formatos.image);
                yield tColaborador.update({ imagen: url });
                updates.push({ path: 'imagen', past, now: url });
            }
        }
        catch (error) { }
        if (contacto) {
            const past = tColaborador.contacto;
            yield tColaborador.update({ contacto: contacto });
            updates.push({ path: 'contacto', past, now: contacto });
        }
        if (updates.length)
            return res.status(200).json({ status: 200, msg: 'Colaborador editado', bag: { updates } });
        return res.status(200).json({ status: 200, msg: 'No se han realizado ediciones' });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar colaborador en este momento" });
    }
});
exports.Update = Update;
