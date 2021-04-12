"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummySchema = void 0;
const graphql_1 = require("graphql");
exports.DummySchema = graphql_1.buildSchema(`
    
    type Person {
        name: String!
        email: String!
        
    }

    type RootQuery {
        hello(person: Person) : Person
    }

    schema {
        query: RootQuery
    }
`);
