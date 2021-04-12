import express,{Request , Response} from 'express';
import {buildSchema} from 'graphql'; 


export const DummySchema = buildSchema(`
    
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