"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../../controllers/administrador/adminController"));
class AdminRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', adminController_1.default.list);
        this.router.get('/:cedula', adminController_1.default.getOne);
        this.router.post('/', adminController_1.default.create);
        this.router.put('/:cedula', adminController_1.default.update);
    }
}
const adminRoutes = new AdminRoutes();
exports.default = adminRoutes.router;
