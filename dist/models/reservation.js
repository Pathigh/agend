"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Reservation = connection_1.default.define('Reservation', {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    note: {
        type: sequelize_1.DataTypes.TEXT
    },
    message: {
        type: sequelize_1.DataTypes.TEXT
    },
    date_at: {
        type: sequelize_1.DataTypes.STRING
    },
    time_at: {
        type: sequelize_1.DataTypes.STRING
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    },
    pacient_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    symtoms: {
        type: sequelize_1.DataTypes.TEXT
    },
    sick: {
        type: sequelize_1.DataTypes.TEXT
    },
    medicaments: {
        type: sequelize_1.DataTypes.STRING
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    medic_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    is_web: {
        type: sequelize_1.DataTypes.TINYINT
    }
});
exports.default = Reservation;
//# sourceMappingURL=reservation.js.map