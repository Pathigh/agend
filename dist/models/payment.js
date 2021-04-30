"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Payment = connection_1.default.define('Payment', {
    name: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Payment;
//# sourceMappingURL=payment.js.map