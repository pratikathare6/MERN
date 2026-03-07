const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://Pratik6:pratik751062@cluster0.1aizdpc.mongodb.net/SocialApp');
//dont need to connect to DB already connected in the usermodel

const postsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

module.exports = mongoose.model("posts", postsSchema);
