"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('User', {
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    is_active: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: false
    },
    is_admin: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: false
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map