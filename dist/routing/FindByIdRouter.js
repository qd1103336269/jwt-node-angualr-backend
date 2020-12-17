"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindByIdRouter = void 0;
const picture_model_1 = require("../model/picture/picture.model");
class FindByIdRouter {
    AddRoute(route) {
        route.get('/id/:id', (request, response) => {
            picture_model_1.Picture.findOne({ _id: request.params.id }, '-_id', (err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.json(picture);
            });
        });
    }
}
exports.FindByIdRouter = FindByIdRouter;
