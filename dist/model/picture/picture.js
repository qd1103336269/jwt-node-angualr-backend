"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.PictureSchema = exports.AddPictureRouter = void 0;
const mongoose_1 = __importStar(require("mongoose"));
class AddPictureRouter {
    AddRoute(route) {
        route.post('/add', (req, res) => {
        });
    }
}
exports.AddPictureRouter = AddPictureRouter;
exports.PictureSchema = new mongoose_1.Schema({
    Image: String,
    Name: String,
    Desc: String,
    Tags: String
});
exports.Picture = mongoose_1.default.model('picture', exports.PictureSchema);
