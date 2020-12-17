import { IRouter } from "./Router";
import { Picture } from "../model/picture/picture.model";
import { Response } from "express";
import jwt from "jsonwebtoken";
export class GetPicturesRouter implements IRouter {
  public AddRoute(route: any): void {
    route.get('/get/', (request: Request, response: Response) => {
      let data: any = request.headers
      let token = data.authorization.split(' ')[1]
      jwt.verify(token, 'testdemo123456', (err: any) => {
        if(err) {
        response.json({
          statusCode: 401,
          msg: 'token验证失败'

        })
      }else {
        response.send({
          statusCode: 201,
          msg: '请求成功',
          data:['分站1', '分站1', '分站1', '分站1']

        })
      }
      })
    });
  }
}
