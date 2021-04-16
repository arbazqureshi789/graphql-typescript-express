import express,{Request , Response} from 'express';
import {buildSchema} from 'graphql';

export const querySchema = buildSchema(`

    type RegisteredUser{
        id: String!
        name: String!
        email: String!
        password: String!
    }

    type rootQueries{
        register(name: String!, email:String!, password: String!):RegisteredUser!
        login(email: String! , password: String!): Boolean!
        getUser: RegisteredUser!
    }
    
    schema {
        query: rootQueries
    }

`);