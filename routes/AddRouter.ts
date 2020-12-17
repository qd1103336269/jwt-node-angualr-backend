import { IRouter } from "./Router";
import { Picture } from "../model/picture/picture.model";
import { Response } from "express";

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
        route.post('/add/',(request: Request, response: Response) => {
          console.log(request.body)
          const picture = new Picture(request.body);
          picture.save((err: any, picture: any) => {
            if (err) {
              response.send(err);
            }
            console.log(picture)
            response.json(picture);
          });
        });
    }
}
