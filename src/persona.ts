import { Materia } from "./materia";

export class Alumno {
    public nombre: string;
    public apellido: string;
    public DNI: number;
    private listaMaterias: Materia[];
    private idPersona: number;

    constructor(nombre: string, apellido: string, DNI: number, idPersona: number) {
        this.nombre = nombre;
        this.apellido = apellido;

        this.DNI = DNI;
        this.idPersona = idPersona;

        this.listaMaterias = [];
    }

    public getNombre() {
        return this.nombre;
    }
    public getApellido() {
        return this.apellido;
    }
    public getDNI() {
        return this.DNI;
    }
    public getIdMateria() {
        return this.idPersona;
    }
    public getListaMateria() {
        return this.listaMaterias;
    }

    public agregarMateria(unaMateria: Materia): void {
        for (const item of this.getListaMateria()) {
            if (item.getNombreMateria() == unaMateria.getNombreMateria()) {
                return;
            }
        }
        this.listaMaterias.push(unaMateria);
    }
}
