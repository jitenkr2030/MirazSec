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
exports.createTask = exports.getAllTasks = void 0;
const task_1 = __importDefault(require("../models/task"));
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield task_1.default.find();
});
exports.getAllTasks = getAllTasks;
const createTask = (taskData) => __awaiter(void 0, void 0, void 0, function* () {
    const task = new task_1.default(taskData);
    return yield task.save();
});
exports.createTask = createTask;
// Add other CRUD operations
exports.default = { getAllTasks: exports.getAllTasks, createTask: exports.createTask };
