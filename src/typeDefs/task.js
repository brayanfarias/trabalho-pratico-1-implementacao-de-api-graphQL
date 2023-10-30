const { gql } = require("apollo-server")

const task = gql`
    type Task {
        id: ID!
        title: String!
        description: String
        completed: Boolean!
        createdBy: User!
  }
`

module.exports = task;