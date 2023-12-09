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
    const { id, titulo, inicio, final, descripcion, nombre, enlace, fileExtension } = body;
    const updates = [];
    try {
        const tCalendarEvent = yield models_1.CalendarEvent.findOne({
            where: {
                id: id
            }
        });
        if (!tCalendarEvent)
            return res.status(200).json({ status: 404, msg: 'No existe calendar event con el id ' + id });
        if (titulo) {
            const past = tCalendarEvent.titulo;
            yield tCalendarEvent.update({ titulo: titulo });
            updates.push({ path: 'titulo', past, now: titulo });
        }
        if (inicio) {
            const past = tCalendarEvent.inicio;
            yield tCalendarEvent.update({ inicio: inicio });
            updates.push({ path: 'inicio', past, now: inicio });
        }
        if (final) {
            const past = tCalendarEvent.final;
            yield tCalendarEvent.update({ final: final });
            updates.push({ path: 'final', past, now: final });
        }
        if (descripcion) {
            const past = tCalendarEvent.descripcion;
            yield tCalendarEvent.update({ descripcion: descripcion });
            updates.push({ path: 'descripcion', past, now: descripcion });
        }
        if (nombre) {
            const past = tCalendarEvent.nombre;
            yield tCalendarEvent.update({ nombre: nombre });
            updates.push({ path: 'nombre', past, now: nombre });
        }
        if (enlace) {
            const past = tCalendarEvent.enlace;
            yield tCalendarEvent.update({ enlace: enlace });
            updates.push({ path: 'enlace', past, now: enlace });
        }
        try {
            // @ts-ignore
            const src = req.files.src.data;
            if (src != undefined) {
                const past = tCalendarEvent.src;
                if (past) {
                    const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.calendar_event);
                    try {
                        yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
                    }
                    catch (error) {
                    }
                }
                const url = yield (0, FileHandler_1.UploadFile)(src, path_1.default.join(__dirname, config_1.RelativePath.calendar_event), fileExtension, config_1.Formatos.image);
                yield tCalendarEvent.update({ src: url });
                updates.push({ path: 'src', past, now: url });
            }
        }
        catch (error) { }
        return res.status(200).json({ status: 200, msg: "Updated", bag: { updates } });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos editar calendar event en este momento" });
    }
});
exports.Update = Update;
