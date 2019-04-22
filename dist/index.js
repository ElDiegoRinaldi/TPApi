"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./api"));
const port = 8080;
api_1.default.app.set("port", port);
api_1.default.app.set("views", path_1.default.join(__dirname, "views"));
api_1.default.app.set("view engine", "ejs");
const server = http.createServer(api_1.default.app);
server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Servidor iniciado: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map