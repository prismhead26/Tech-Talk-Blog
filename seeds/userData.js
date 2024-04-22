// require associated model
const { User } = require("../models");

const userData = [
  {
    name: "Valentino Rossi",
    username: "RRace",
    password: "cbr600",

  },
];

const seedUser = () =>
  User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUser;