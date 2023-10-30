const query = require("./query");
const mutation = require("./mutation");
const task = require("./task");
const user = require("./user");

const typeDefs = [query, mutation, task, user];

module.exports = typeDefs;