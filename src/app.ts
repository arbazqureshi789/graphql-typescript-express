import express,{request, response} from 'express';
import {graphqlHTTP} from 'express-graphql';
// import dotenv from 'dotenv';
import {json} from 'body-parser';

import {querySchema} from './graphQl/schema';
import {queryResolver} from './graphQl/resolvers';



// dotenv.config();
const app = express();

app.use(json());

app.use('/graphql' , graphqlHTTP({
    schema: querySchema,
    rootValue: queryResolver,
    graphiql:true,
    context:{
        req:request,
        res: response
    }

}));

app.listen(3000);