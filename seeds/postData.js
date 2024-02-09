const { Post } = require("../models/Post");

const postData = [
  {
    title: "My thoughts on tabby cats",
    text: "I submit that tabby cats are the ideal cat! Their fur is perfect in every single way, and have you ever met a cat more ready and willing to cuddle? I believe you have not!",
    user_id: 1,
  },
  {
    title: "Bro be trippin",
    text: "I really can't believe this other guy. Who would honestly believe that tabby cats are the best? Who would actually believe that cats are even a good pet? I'm with all other sane people who fully believe that the only pet worth your time is a fish. Low maintenance, always loyal, and waaaaay less costly. Good luck to all you cat lovers out there...",
    user_id: 2,
  },
  {
    title: "What's going on?",
    text: "When did Blogmire become a battleground for which pet is the best? I mean, if that's what's happening, then I may as well throw my hat in the ring. Birds are absolutely the best type of pet! Personally I prefer finches. Just love the little guys! But I can appreciate any type of avian.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;