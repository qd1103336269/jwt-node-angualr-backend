import { RoutingEngine } from "./routes/RoutingEngine";
import { AddPictureRouter } from "./routes/AddRouter";
import { GetPicturesRouter } from "./routes/GetPicturesRouter";
import { FindByIdRouter } from "./routes/FindByIdRouter";
import { Server } from "./server";
import { LoginRouter } from './routes/LoginRouter';
export class AdvancedTypeScriptProjectsChapter4 extends Server {
    protected AddRouting(routingEngine: RoutingEngine, router: any): void {
        routingEngine.Add(AddPictureRouter, router);
        routingEngine.Add(GetPicturesRouter, router);
        routingEngine.Add(FindByIdRouter, router);
        routingEngine.Add(LoginRouter, router);
    }
}

new AdvancedTypeScriptProjectsChapter4(3000).WithCorsSupport().Start()