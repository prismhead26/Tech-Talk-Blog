// require associated model
const { Comment } = require("../models");

const commentData = [
    {
        description: "I agree!",
        user_id: 1,
        blog_id: 1,
    },
  ];
  
  const seedUser = () =>
    Comment.bulkCreate(commentData, { individualHooks: true });
  module.exports = seedUser;