import express, { request, response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
// import dotenv from 'dotenv';
import { json } from 'body-parser';

import { querySchema } from './graphQl/schema';
import { queryResolver } from './graphQl/resolvers';

// dotenv.config();
const app = express();
app.use(json());

// creating database connection
createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.name = "Rehan Qureshi";
    // user.email = "arbazqureshi@gmail.com";
    // user.password = "123456789";

    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

    app.use('/graphql', graphqlHTTP({
        schema: querySchema,
        rootValue: queryResolver,
        graphiql: true,
        context: {
            req: request,
            res: response
        }

    }));

    app.listen(3000);

}).catch(error => console.log(error));