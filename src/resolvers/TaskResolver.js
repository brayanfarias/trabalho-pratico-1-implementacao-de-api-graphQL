const Task = require("../models/Task");
const User = require("../models/User");


const TaskResolver = {
  Query: {
    tasks: async () => {
      return await Task.find().populate('createdBy')
    },
    task: async(_, {id}) => {
      return await Task.findById(id).populate('createdBy')
    },
    completedTasks: async() => {
        return await Task.find({completed: true}).populate('createdBy')
    },
    pendingTasks: async() => {
      return await Task.find({completed: false}).populate('createdBy')
  }

  },
  Mutation: {
    markTaskAsCompleted: async (_, { id }) => {
      try {

        const task = await Task.findById(id);

        if (!task) {
          throw new Error('Task not found');
        }


        task.completed = true;


        const updatedTask = await task.save();

        return updatedTask;
      } catch (error) {
        throw new Error(`Error marking task as completed: ${error.message}`);
      }
    },
    createTask: async (_, { title, description, createdBy }) => {
      try {
        const user = await User.findById(createdBy);
        if (!user) {
          throw new Error('User not found');
        }

        const newTask = new Task({
          title,
          description,
          createdBy: user,
        });

        const task = await newTask.save();

        return task;
      } catch (error) {
        throw new Error(`Error creating task: ${error.message}`);
      }
    },

    updateTask: async (_, { id, title, description, completed }) => {
      try {
        const task = await Task.findById(id);

        if (!task) {
          throw new Error('Task not found');
        }

        if (title) {
          task.title = title;
        }
        if (description) {
          task.description = description;
        }
        if (completed != undefined) {
          task.completed = completed;
        }

        const updatedTask = await task.save();

        return updatedTask;
      } catch (error) {
        throw new Error(`Error updating task: ${error.message}`);
      }
    },



    deleteTask: async (_, { id }) => {
      try {
        const task = await Task.findById(id);

        if (!task) {
          throw new Error('Task not found');
        }

        const deletedTaskId = task.id;
        await task.remove();

        return deletedTaskId;
      } catch (error) {
        throw new Error(`Error deleting task: ${error.message}`);
      }
    },
  },
};

module.exports = TaskResolver;
