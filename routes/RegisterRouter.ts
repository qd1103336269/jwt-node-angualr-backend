import { IRouter } from "./Router";
import { User } from "../model/users/users.model";
import { Request, Response } from "express";
import bodyParser from 'body-parser';
export class RegisterRouter implements IRouter {
  public AddRoute(route: any): void {
    route.post('/register', bodyParser.urlencoded({extended: false}), bodyParser.json(), async (request: Request, response: Response) => {
      let {username, password}: any = request.body
      // let user: any = await User.create({username, password})
      // console.log(user)

    });
  }
}