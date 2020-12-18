import { IRouter } from "./Router";
// import { Picture } from "../model/picture/picture.model";
import { User } from "../model/users/users.model";
import { response, Response } from "express";
import bodyParser from 'body-parser';

import jwt from "jsonwebtoken";
export class LoginRouter implements IRouter {
  public AddRoute(route: any): void {
    route.post('/login/', bodyParser.urlencoded({extended: false}),bodyParser.json(), async (request: Request, response: Response) => {
      // console.log(request.body)
      const {username, password}: any = request.body;
      let user: any = await User.findOne({username})
      console.log(user)
      if( user !== null && user.username === username) {
        let token = jwt.sign({
          username,
          password
        },
        'testdemo123456',
        {
          expiresIn: 60,
          algorithm: "HS256"
        })
        response.json({
          token: token,
          msg: '登录成功',
          code: 200
        })    
      }else {
        // response.json({
        //   code: 401,
        //   msg: '用户名或者密码错误'
        // })
        response.status(401).send({
          msg: '用户名或者密码错误'
        })
      }
      
    });
    
  }
}
