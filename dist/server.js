"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const RoutingEngine_1 = require("./routing/RoutingEngine");
const picture_model_1 = require("./model/picture/picture.model");
// new Mongo().Connect()
class Server {
    constructor(port = 3000, app = express_1.default(), mongo = new picture_model_1.Mongo(), routingEngine = new RoutingEngine_1.RoutingEngine()) {
        this.port = port;
        this.app = app;
        this.mongo = mongo;
        this.routingEngine = routingEngine;
    }
    Start() {
        this.mongo.Connect();
        this.router = express_1.default.Router();
        this.AddRouting(this.routingEngine, this.router);
        this.app.use(this.router);
        this.app.use(body_parser_1.default.json({ limit: '100mb' }));
        this.app.use(body_parser_1.default.urlencoded({ extended: true, limit: '100mb' }));
        this.OnStart();
        this.app.listen(this.port, (err) => {
            if (err)
                console.log(err);
            console.log(`server listen at http://localhost:3000`);
        });
    }
    // 配置cors
    WithCorsSupport() {
        this.app.use(cors_1.default());
        return this;
    }
    OnStart() {
    }
}
exports.Server = Server;
// new Server(3000).Start()
