import {NextFunction, Request, Response, Router} from "express";
import {Alumno} from "./persona";

const listaAlumnos: Alumno[] = [];
let id: number = 0;

export class AlumnoRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.send(listaAlumnos);
    }

    public createAlumno(req: Request, res: Response) {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const url = req.body.url;
        const DNI = req.body.DNI;

        const unAlumno = new Alumno(url, nombre, apellido, DNI, id);

        listaAlumnos.push(unAlumno);

        id += 1;
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
