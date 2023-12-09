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
exports.Login = void 0;
const models_1 = require("../../../db/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Jwt_1 = require("../../../helpers/Jwt");
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { correo, password } = body;
    try {
        const tUser = yield models_1.User.findOne({
            where: {
                correo: correo
            },
            include: [
                {
                    model: models_1.DataUser
                }
            ]
        });
        if (tUser && bcrypt_1.default.compareSync(password, tUser.password)) {
            const token = yield (0, Jwt_1.generarJwt)({ id: tUser.id });
            return res.status(200).json({ status: 200, msg: 'Usuario logeado', bag: { token } });
        }
        return res.status(200).json({ status: 400, msg: "Usuario o Contraseña incorrectos" });
    }
    catch (err) {
        return res.status(200).json({ status: 500, err, msg: "" });
    }
});
exports.Login = Login;
