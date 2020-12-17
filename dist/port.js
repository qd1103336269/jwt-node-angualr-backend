"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedTypeScriptProjectsChapter4 = void 0;
const addRoute_1 = require("./routing/addRoute");
const GetPicturesRouter_1 = require("./routing/GetPicturesRouter");
const FindByIdRouter_1 = require("./routing/FindByIdRouter");
const server_1 = require("./server");
class AdvancedTypeScriptProjectsChapter4 extends server_1.Server {
    AddRouting(routingEngine, router) {
        routingEngine.Add(addRoute_1.AddPictureRouter, router);
        routingEngine.Add(GetPicturesRouter_1.GetPicturesRouter, router);
        routingEngine.Add(FindByIdRouter_1.FindByIdRouter, router);
    }
}
exports.AdvancedTypeScriptProjectsChapter4 = AdvancedTypeScriptProjectsChapter4;
new AdvancedTypeScriptProjectsChapter4(3000).WithCorsSupport().Start();
