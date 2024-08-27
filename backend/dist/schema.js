"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Guard {
    id: ID!
    name: String!
    email: String!
    phone: String!
    location: String!
  }

  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
    address: String!
  }

  type FieldOfficer {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Incident {
    id: ID!
    type: String!
    description: String!
    location: String!
    date: String!
  }

  type Task {
    id: ID!
    title: String!
    description: String!
    assignedTo: Guard!
    dueDate: String!
  }

  type Query {
    guards: [Guard!]
    guard(id: ID!): Guard

    clients: [Client!]
    client(id: ID!): Client

    fieldOfficers: [FieldOfficer!]
    fieldOfficer(id: ID!): FieldOfficer

    incidents: [Incident!]
    incident(id: ID!): Incident

    tasks: [Task!]
    task(id: ID!): Task
  }

  input GuardInput {
    name: String!
    email: String!
    phone: String!
    location: String!
  }

  input ClientInput {
    name: String!
    email: String!
    phone: String!
    address: String!
  }

  input FieldOfficerInput {
    name: String!
    email: String!
    phone: String!
  }

  input IncidentInput {
    type: String!
    description: String!
    location: String!
    date: String!
  }

  input TaskInput {
    title: String!
    description: String!
    assignedTo: ID!
    dueDate: String!
  }

  type Mutation {
    createGuard(input: GuardInput!): Guard
    updateGuard(id: ID!, input: GuardInput!): Guard
    deleteGuard(id: ID!): Guard

    createClient(input: ClientInput!): Client
    updateClient(id: ID!, input: ClientInput!): Client
    deleteClient(id: ID!): Client

    createFieldOfficer(input: FieldOfficerInput!): FieldOfficer
    updateFieldOfficer(id: ID!, input: FieldOfficerInput!): FieldOfficer
    deleteFieldOfficer(id: ID!): FieldOfficer

    createIncident(input: IncidentInput!): Incident
    updateIncident(id: ID!, input: IncidentInput!): Incident
    deleteIncident(id: ID!): Incident

    createTask(input: TaskInput!): Task
    updateTask(id: ID!, input: TaskInput!): Task
    deleteTask(id: ID!): Task
  }
`;
exports.default = typeDefs;
