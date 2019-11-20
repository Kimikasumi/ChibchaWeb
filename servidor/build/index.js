"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const registradorRoutes_1 = __importDefault(require("./routes/registradorRoutes"));
const distribuidorRoutes_1 = __importDefault(require("./routes/distribuidorRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const empleadoRoutes_1 = __importDefault(require("./routes/empleadoRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/admin', adminRoutes_1.default);
        this.app.use('/regDominio', registradorRoutes_1.default);
        this.app.use('/distribuidor', distribuidorRoutes_1.default);
        this.app.use('/cliente', clienteRoutes_1.default);
        this.app.use('/empleado', empleadoRoutes_1.default);
        this.app.use('/usuario', usuarioRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log('Server on port ', this.app.get('port'));
    }
}
const server = new Server();
server.start();
