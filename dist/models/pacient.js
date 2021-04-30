"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Pacient = connection_1.default.define('Pacient', {
    no: {
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    gender: {
        type: sequelize_1.DataTypes.STRING
    },
    day_of_birth: {
        type: sequelize_1.DataTypes.DATE
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    },
    sick: {
        type: sequelize_1.DataTypes.STRING
    },
    medicaments: {
        type: sequelize_1.DataTypes.STRING
    },
    alergy: {
        type: sequelize_1.DataTypes.STRING
    },
    is_favorite: {
        type: sequelize_1.DataTypes.STRING
    },
    is_active: {
        type: sequelize_1.DataTypes.TINYINT
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
});
exports.default = Pacient;
//# sourceMappingURL=pacient.js.map