const express = require("express");
const router = express.Router();
const passport = require("passport");
const Room = require("../models/Room");
/* Here we'll write the routes for the rooms */

//1. to retrieve rooms from mongo and make available to frontend
router.get("/rooms", (req, res, next) => {
  console.log("Rooms", req.body);

  Room.find({}).then((result) => {
    res.send({ rooms: result });
  });
});

router.get("/rooms/:_id", (req, res, next) => {
  console.log("Rooms");

  Room.find({}).then((result) => {
    console.log(result);
    res.send({ rooms: result });
  });
});

//post new room in Berlin
router.post("/addRoom", (req, res) => {
  //2.get the data from frontend
  const {
    name,
    district,
    description,
    price,
    postcode,
    address,
    phoneNumber,
    email,
    neighbourhood,
    coordinates,
  } = req.body;
  console.log("BACKEND", req.body);
  //3. then create a new room with information from the frontend
  req.user;
  Room.create({
    name: name,
    district: district,
    postcode: postcode,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
    neighbourhood: neighbourhood,
    coordinates: coordinates,
    description: description,
    price: price,
  })
    .then((newRoom) => {
      console.log("whats name?");
      console.log("NEWROOM", newRoom);
      res - json(newRoom);
    })
    .catch((err) => {
      res.status(500).json({
        messgae: "Error",
      });
    });
});

//delete room from list
router.delete("/rooms/:id/delete", (req, res) => {
  //console.log('whats req?', req.params.id);
  Room.deleteOne({ _id: req.params.id })
    .then((result) => {
      //console.log('RESULT', result);
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error" });
    });
});

module.exports = router;
