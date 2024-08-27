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
exports.createIncident = exports.getAllIncidents = void 0;
const incident_1 = __importDefault(require("../models/incident"));
const getAllIncidents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield incident_1.default.find();
});
exports.getAllIncidents = getAllIncidents;
const createIncident = (incidentData) => __awaiter(void 0, void 0, void 0, function* () {
    const incident = new incident_1.default(incidentData);
    return yield incident.save();
});
exports.createIncident = createIncident;
// Add other CRUD operations
exports.default = { getAllIncidents: exports.getAllIncidents, createIncident: exports.createIncident };
