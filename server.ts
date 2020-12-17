import express  from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RoutingEngine } from "./routes/RoutingEngine";
import { Mongo } from "./model/picture/picture.model";
import expressJwt from 'express-jwt'
// new Mongo().Connect()

export abstract class Server {
  private router: any;
  protected secret: string = 'testdemo123456'
  constructor(
    private port: number = 3000,
    private app: any = express(),
    private mongo: Mongo = new Mongo(),
    private routingEngine: RoutingEngine = new RoutingEngine()
  ) {}
  protected abstract AddRouting(routingEngine: RoutingEngine, router: any): void;
  public Start(): void {
    this.mongo.Connect()
    this.router = express.Router()
    this.AddRouting(this.routingEngine, this.router)
    this.app.use(this.router)
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}))
    // this.app.use(expressJwt({
    //   secret: this.secret,
    //   algorithm: ['HS256'],
    //   credentialsRequired: true
    // }).unless({
    //   path:['/login']
    // }))
    this.OnStart();
    this.app.listen(this.port, (err: any) =>  {
      if(err) console.log(err)
      console.log(`server listen at http://localhost:3000`)
    })
  }
  // 配置cors
  public WithCorsSupport():Server {
    this.app.use(cors());
    return this;
  }
  protected OnStart(): void {
    
  }
}





// new Server(3000).Start()