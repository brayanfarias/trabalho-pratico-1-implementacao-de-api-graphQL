const User = require("../models/User");

const userResolver = {
  Query: {

    users: async() => {
      return await User.find()
    }

  },
  Mutation: {

    createUser: async (_, { name }) => {

      const user = new User({ name })

      return await user.save()

    }

  },
};

module.exports = userResolver;
