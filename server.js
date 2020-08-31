var express = require('express');
var {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
/**
 * Schema
 */
var schema = buildSchema(`
type Query {
    message: String
}`);
/**
 * Root Resolver
 */
var root = {
    message: () => "Hello World!"
};

/**
 * create an express server and a graphql endpoint
 */
var app = express();
app.use('/graphql', graphqlHTTP(
    {
        schema: schema,
        rootValue: root,
        graphiql: true
    }
));

app.listen(4000, () => console.log('Express Server Running'));