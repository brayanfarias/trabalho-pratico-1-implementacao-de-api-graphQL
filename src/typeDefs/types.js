const { gql } = require("apollo-server");

const types = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    createdBy: User!
  }

  type User {
    id: ID!
    name: String!
  }
`;

module.exports = types;
