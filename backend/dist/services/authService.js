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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAuthToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
};
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default(userData);
    yield user.save();
    const token = generateAuthToken(user);
    return { user, token };
});
exports.register = register;
const login = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ username: loginData.username });
    if (!user || !(yield user.comparePassword(loginData.password))) {
        throw new Error('Invalid login credentials');
    }
    const token = generateAuthToken(user);
    return token;
});
exports.login = login;
exports.default = { register: exports.register, login: exports.login };
