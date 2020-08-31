# graphqltest1
working on graphql
create the app repository on github
close the app on your local folder
browse the folder and hit npm int
hit npm install graphql express express-graphql --save
hit touch server.js


test
/*
query getSingleCourse($courseID: Int!){
  course(id: $courseID){
    title
    author
    description
    topic
    url
  }
}
//query  vaiable
{
  "courseID": 2
}
*/
/*
query getCoursesForTopic($courseTopic: String!){
  courses(topic: $courseTopic){
    title
    author
    description
    topic
    url
  }
}
//{
  "courseTopic": "Science"
}
*/
/*
query getCoursesWithFragments($courseID1: Int!, $courseID2: Int!){
  course1: course(id: $courseID1){
    ...courseFields
  }
  course2: course(id: $courseID2){
    ...courseFields
  }
}

fragment courseFields on Course{
  title
  author

  topic
  url
}
//
{
  "courseID1": 1,
  "courseID2": 2
}
*/