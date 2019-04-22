"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("./persona");
const listaAlumnos = [];
class AlumnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getAll(req, res, next) {
        const json = [{
                nombre: "",
                apellido: "",
                DNI: ""
            }];
        let i = 0;
        for (const item of listaAlumnos) {
            json[i].nombre = item.nombre;
            json[i].apellido = item.apellido;
            json[i].DNI = String(item.DNI);
            i += 1;
            console.log(json[i]);
        }
        res.send(json);
    }
    createAlumno(req, res) {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const DNI = req.body.DNI;
        const id = 0;
        console.log(nombre);
        console.log(apellido);
        console.log(DNI);
        const unAlumno = new persona_1.Alumno(nombre, apellido, DNI, id);
        listaAlumnos.push(unAlumno);
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