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
const guardResolver = {
    Query: {
        guards: () => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to get all guards
        }),
        guard: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to get a guard by ID
        }),
    },
    Mutation: {
        createGuard: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to create a new guard
        }),
        updateGuard: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to update a guard
        }),
        deleteGuard: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to delete a guard
        }),
    },
};
exports.default = guardResolver;
