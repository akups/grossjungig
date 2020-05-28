const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  description: String,
  name: String,
  price: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  coordinates: [Number],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
