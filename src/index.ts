import * as http from "http";
import path from "path";

import App from "./api";

const port = 8080;

App.app.set("port", port);
App.app.set( "views", path.join( __dirname, "views" ) );
App.app.set( "view engine", "ejs" );

const server = http.createServer(App.app);

server.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Servidor iniciado: http://localhost:${ port }` );
} );
