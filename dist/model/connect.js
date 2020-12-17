"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Mongo {
    constructor(url = 'mongodb://localhost:27017/socket') {
        this.url = url;
    }
    Connect() {
        mongoose_1.default.connect(this.url, (err) => {
            if (err) {
                console.log('connect failed');
            }
            else {
                console.log('connect succcessful');
            }
        });
    }
}
exports.Mongo = Mongo;
