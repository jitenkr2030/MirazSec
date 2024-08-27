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
const fieldOfficerResolver = {
    Query: {
        fieldOfficers: () => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to get all field officers
        }),
        fieldOfficer: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to get a field officer by ID
        }),
    },
    Mutation: {
        createFieldOfficer: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to create a new field officer
        }),
        updateFieldOfficer: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to update a field officer
        }),
        deleteFieldOfficer: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            // Logic to delete a field officer
        }),
    },
};
exports.default = fieldOfficerResolver;
