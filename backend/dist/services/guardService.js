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
exports.createGuard = exports.getAllGuards = void 0;
const guard_1 = __importDefault(require("../models/guard"));
const getAllGuards = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield guard_1.default.find();
});
exports.getAllGuards = getAllGuards;
const createGuard = (guardData) => __awaiter(void 0, void 0, void 0, function* () {
    const guard = new guard_1.default(guardData);
    return yield guard.save();
});
exports.createGuard = createGuard;
// Add other CRUD operations
exports.default = { getAllGuards: exports.getAllGuards, createGuard: exports.createGuard };
