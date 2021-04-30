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
exports.login = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { Op } = require("sequelize");
    try {
        // verificar si el correo existe
        const existEmail = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (!existEmail) {
            return res.status(400).json({
                msg: 'el usuario o pass no son correctos...  ' + body.email
            });
        }
        // verificar si el user esta activo
        const existUser = yield user_1.default.findOne({
            where: { is_active: { [Op.not]: false } }
        });
        if (!existUser) {
            return res.status(400).json({
                msg: 'el usuario o pass no son correctos...  estado= false'
            });
        }
        // verificar contraseña
        const validPassword = bcryptjs_1.default.compareSync(body.password, user_1.default.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'el usuario o pass no son correctos...  passs'
            });
        }
        res.json({
            msg: 'login ok'
        });
        // Generar el JWT
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Hable con el administrador`
        });
    }
});
exports.login = login;
module.exports = {
    login: exports.login
};
//# sourceMappingURL=auth.js.map