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
        const tCarousel = yield models_1.Carousel.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'src'],
            include: [
                {
                    model: models_1.DataCarousel,
                    attributes: ['id']
                }
            ]
        });
        if (!tCarousel)
            return res.status(200).json({ status: 400, msg: 'Debe proporcionar un Carousel Item Válido' });
        const past = tCarousel.src;
        if (past) {
            const uploadDir = path_1.default.join(__dirname, config_1.RelativePath.carousel);
            try {
                yield (0, FileHandler_1.DeleteFile)(path_1.default.join(uploadDir, past));
            }
            catch (error) {
            }
        }
        // @ts-ignore
        // await(DeleteFile(path.join(__dirname , RelativePath.carousel , tCarousel.src) )); 
        const tDataCarousel = tCarousel.data_carousel;
        yield tCarousel.destroy();
        yield tDataCarousel.destroy();
        return res.status(200).json({ status: 200, msg: "Carousel item eliminado" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "No podemos eliminar Carousel Item en este momento" });
    }
});
exports.Delete = Delete;
