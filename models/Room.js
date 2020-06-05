const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: String,
  description: String,
  price: String,
  postcode: Number,
  address: String,
  phoneNumber: Number,
  email: String,
  neighbourhood: String,
  coordinates: [Number],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  pictures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Images",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
