import express,{Request , Response} from 'express';
import {buildSchema,GraphQLSchema} from 'graphql';

export const querySchema: GraphQLSchema = buildSchema(`

    type RegisteredUser{
        id: String!
        name: String!
        email: String!
    }


    type rootQueries{
        register(name: String!, email:String!, password: String!):RegisteredUser!
        login(email: String! , password: String!): Boolean!
        getUser(): RegisteredUser!
    }
    
    
    schema:{
        query: rootQueries;
    }

`);