const { gql } = require("apollo-server")

const user = gql`
    type User {
        id: ID!
        name: String!
    }
`

module.exports = user;