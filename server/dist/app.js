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
exports.server = exports.app = void 0;
const conectionDb_js_1 = __importDefault(require("./database/conectionDb.js"));
const config_js_1 = require("./config.js");
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const initializeDatabase = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Conexión exitosa a la base de datos.");
    }
    catch (error) {
        console.error("Error al conectar la base de datos:", error);
    }
});
// Inicializa la base de datos
initializeDatabase(conectionDb_js_1.default);
// Iniciar servidor
exports.server = exports.app.listen(config_js_1.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${config_js_1.PORT}`);
});
