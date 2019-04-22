"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("./persona");
const listaAlumnos = [];
let id = 0;
class AlumnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        res.send(listaAlumnos);
    }
    createAlumno(req, res) {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const url = req.body.url;
        const DNI = req.body.DNI;
        const unAlumno = new persona_1.Alumno(url, nombre, apellido, DNI, id);
        listaAlumnos.push(unAlumno);
        id += 1;
    }
    init() {
        this.router.get("/", this.getAll);
        // this.router.get("/:url", this.getOne());
        this.router.post("/P");
        // this.router.delete("/:url");
        // this.router.put("/:url");
    }
}
exports.AlumnoRoutes = AlumnoRoutes;
const alumnoRoutes = new AlumnoRoutes();
alumnoRoutes.init();
exports.default = alumnoRoutes.router;
//# sourceMappingURL=routesAlumno.js.map