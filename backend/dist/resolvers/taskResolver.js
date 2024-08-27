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
const taskResolver = {
    Query: {
        tasks: () => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to get all tasks
        }),
        task: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to get a task by ID
        }),
    },
    Mutation: {
        createTask: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to create a new task
        }),
        updateTask: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to update a task
        }),
        deleteTask: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to delete a task
        }),
    },
};
exports.default = taskResolver;
