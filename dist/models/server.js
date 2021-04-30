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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const category_1 = __importDefault(require("../routes/category"));
const auth_1 = __importDefault(require("../routes/auth"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            auth: '/api/login',
            users: '/api/usuarios',
            category: '/api/categorias',
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '3000';
        //connection
        this.dbConnection();
        // middelewares
        this.middlewares();
        // definir mis rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.category, category_1.default);
    }
    // TODO conectar con la base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('La base de datos esta online..!!!');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // Cors
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
        // carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor Corriendo en Puerto...!!! ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map