const { gql } = require("apollo-server");

const query = gql`
  type Query {
    tasks: [Task!]!
    task(id: ID!): Task
    completedTasks: [Task!]!
    pendingTasks: [Task!]!
    users: [User!]!
  }
`;

module.exports = query;
