const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createTask(title: String!, description: String, createdBy: ID!): Task
    markTaskAsCompleted(id: ID!): Task
    updateTask(id: ID!, title: String, description: String, completed: Boolean): Task
    deleteTask(id: ID!): ID
    createUser(name: String!): User
  }
`;

module.exports = mutation;
