export class Materia {
    private nombre: string;
    private idMateria: number;

    constructor(nombre: string, idMateria: number) {
        this.idMateria = idMateria;
        this.nombre = nombre;
    }

    public getNombreMateria() {
        return this.nombre;
    }
    public getIdMateria() {
        return this.idMateria;
    }
}
