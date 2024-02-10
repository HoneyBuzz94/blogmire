const { User } = require("../models/User");

const userData = [
  {
    username: "That1dude",
    email: "That1dude@email.com",
    password: "passwordsaretight",
  },
  {
    username: "NotyoMama24",
    email: "NotyoMama24@email.com",
    password: "mypasswordissupersecure",
  },
  {
    username: "googleplex",
    email: "googleplex@email.com",
    password: "icantremembermypassword",
  },
  {
    username: "test",
    email: "test@email.com",
    password: "12345678",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
