"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alumno {
    constructor(url, nombre, apellido, DNI, idPersona) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.url = url;
        this.DNI = DNI;
        this.idPersona = idPersona;
        this.listaMaterias = [];
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getDNI() {
        return this.DNI;
    }
    getIdMateria() {
        return this.idPersona;
    }
    getListaMateria() {
        return this.listaMaterias;
    }
    agregarMateria(unaMateria) {
        for (const item of this.getListaMateria()) {
            if (item.getNombreMateria() == unaMateria.getNombreMateria()) {
                return;
            }
        }
        this.listaMaterias.push(unaMateria);
    }
}
exports.Alumno = Alumno;
//# sourceMappingURL=persona.js.map