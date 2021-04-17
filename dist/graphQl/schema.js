"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySchema = void 0;
const graphql_1 = require("graphql");
exports.querySchema = graphql_1.buildSchema(`

    type RegisteredUser{
        id: String!
        name: String!
        email: String!
        password: String!
    }

    type rootQueries{
        register(name: String!, email:String!, password: String!):RegisteredUser!
        login(email: String! , password: String!): Boolean!
        getAllUser: [RegisteredUser]!
        getUserByEmail(email: String!): RegisteredUser!
    }
    
    schema {
        query: rootQueries
    }

`);
