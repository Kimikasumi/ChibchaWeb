"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
class AdminController {
    list(req, res) {
        database_1.default.query('DESCRIBE cliente');
        res.json('Listando admins');
    }
    getOne(req, res) {
        database_1.default.query('DESCRIBE cliente');
        res.json('Listando admin ' + req.params.cedula);
    }
    create(req, res) {
        res.json({ text: 'Creando un administrador' });
    }
    update(req, res) {
        res.json({ text: 'Aditando un administrador ' + req.params.cedula });
    }
}
const adminController = new AdminController();
exports.default = adminController;
