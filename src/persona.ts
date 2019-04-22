import { Materia } from "./materia";

export class Alumno {
    public nombre: string;
    public url: string;
    public apellido: string;
    public DNI: number;
    private listaMaterias: Materia[];
    private idPersona: number;

    constructor(url: string, nombre: string, apellido: string, DNI: number, idPersona: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.url = url;

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
