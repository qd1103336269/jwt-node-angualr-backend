"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPictureRouter = void 0;
const picture_model_1 = require("../model/picture/picture.model");
class AddPictureRouter {
    AddRoute(route) {
        route.post('/add/', (request, response) => {
            const picture = new picture_model_1.Picture(request.body);
            picture.save((err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.json(picture);
            });
        });
    }
}
exports.AddPictureRouter = AddPictureRouter;
