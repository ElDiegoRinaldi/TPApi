import {NextFunction, Request, Response, Router} from "express";
import { join } from "path";
import {Alumno} from "./persona";

const listaAlumnos: Alumno[] = [];

export class AlumnoRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        const json = [{
            nombre: "",
            apellido: "",
            DNI: ""
        }];
        let i: number = 0;
        for (const item of listaAlumnos) {
            json[i].nombre = item.nombre;
            json[i].apellido = item.apellido;
            json[i].DNI = String(item.DNI);
            i += 1;
            console.log(json[i]);
        }
        res.send(json);
    }

    public createAlumno(req: Request, res: Response) {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const DNI = req.body.DNI;
        const id = 0;

        console.log(nombre);
        console.log(apellido);
        console.log(DNI);

        const unAlumno = new Alumno(nombre, apellido, DNI, id);
        listaAlumnos.push(unAlumno);
    }

    public init() {
        this.router.get("/", this.getAll);
        // this.router.get("/:url", this.getOne());
        this.router.post("/P");
        // this.router.delete("/:url");
        // this.router.put("/:url");
    }
}

const alumnoRoutes = new AlumnoRoutes();
alumnoRoutes.init();

export default alumnoRoutes.router;
