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
exports.createFieldOfficer = exports.getAllFieldOfficers = void 0;
const fieldOfficer_1 = __importDefault(require("../models/fieldOfficer"));
const getAllFieldOfficers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fieldOfficer_1.default.find();
});
exports.getAllFieldOfficers = getAllFieldOfficers;
const createFieldOfficer = (officerData) => __awaiter(void 0, void 0, void 0, function* () {
    const officer = new fieldOfficer_1.default(officerData);
    return yield officer.save();
});
exports.createFieldOfficer = createFieldOfficer;
// Add other CRUD operations
exports.default = { getAllFieldOfficers: exports.getAllFieldOfficers, createFieldOfficer: exports.createFieldOfficer };
