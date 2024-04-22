// require associated model
const { Blog } = require("../models");

const blogData = [
  {
    title: "Why Code",
    body: "Why code?!?! Coding is awesome, coding is life!",
  },
  {
    title: "OOP",
    body: "Object oriented programming core principles are encapsulation, polymorphism, inheritance, and abstraction.",
  },
  {
    title: "What is Javascript",
    body: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    user_id: 1,
  },
  {
    title: "Global Execution Context vs Function Execution Context",
    body: `There are two types of execution contexts: global and function. \nThe global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. \nA function execution context is created whenever a function is called, representing the function's local scope.`,
    user_id: 1,
  },

];

const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog;