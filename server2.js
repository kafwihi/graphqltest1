var express = require('express');
var {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;


var schema = buildSchema(`
type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
}
type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
}
type Course{
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url:String
}

`);


var coursesData = [
    {
        id: 1,
        title: 'The River and the source',
        author: 'Andrew Kaf, Rob jEb',
        description: 'School carriculum story',
        topic: 'Literature',
        url: 'https://lyrntechnologies.com'
    }, {
        id: 2,
        title: 'An Enemy of the people',
        author: 'Stella Kafwihi',
        description: 'School carriculum story',
        topic: 'Science',
        url: 'https://lyrntechnologies.com'
    }, {
        id: 3,
        title: 'The River and the source',
        author: 'Rob jEb',
        description: 'School carriculum story',
        topic: 'Literature',
        url: 'https://lyrntechnologies.com'
    }, {
        id: 4,
        title: 'Walk with me Anjela',
        author: 'Hellen Walker',
        description: 'School carriculum story',
        topic: 'Geography',
        url: 'https://lyrntechnologies.com'
    }
];

var getCourse = function(args){
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

var getCourses = function(args){
    if(args.topic){
        var topic = args.topic;
        return coursesData.filter(course => course.topic ===topic);
    }
    else{
        return coursesData;
    }
}

var updateCourseTopic = function({id, topic}) {
    coursesData.map(course => {
        if(course.id === id){
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter(course => course.id === id)[0];
}
/**
 * Root Resolver
 */
var root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
}
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