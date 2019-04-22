import * as bodyParser from "body-parser";
import express from "express";
import AlumnoRoutes from "./routesAlumno";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
    // support application/json type post data
        this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();
            // placeholder route handler
        router.get("/", (req, res, next) => {
            res.json({
                message: "Hello World!"
            });
        });
        this.app.use("/", router);
        this.app.use("/api/v1/alumno", AlumnoRoutes);
    }
}

export default new App();
