"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRoute = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const testRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { API_KEY, API_SECRET, PROJECT_KEY } = req.body;
    console.log(req.body, "opopopop");
    try {
        const user = yield prisma.user.findFirst({
            where: {
                apiKey: API_KEY,
                apiSecret: API_SECRET,
            },
        });
        console.log(user, "here is the user brooooo!");
        const project = yield prisma.project.findUnique({
            where: {
                projectKey: PROJECT_KEY,
            },
        });
        console.log(project, "this is the project broooo");
        return res.status(200).send({ message: "yo, we are hererererere!" });
    }
    catch (err) {
        return res.status(400).send({ message: "Server fail!" });
    }
});
exports.testRoute = testRoute;
