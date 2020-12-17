"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPicturesRouter = void 0;
const picture_model_1 = require("../model/picture/picture.model");
class GetPicturesRouter {
    AddRoute(route) {
        route.get('/get/', (request, response) => {
            picture_model_1.Picture.distinct("_id", (err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.send(picture);
            });
        });
    }
}
exports.GetPicturesRouter = GetPicturesRouter;
