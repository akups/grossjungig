const crypto = require("crypto");
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { promisify } = require("util");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_ADDRESS}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
});

router.post("/forgotPassword", async (req, res) => {
  console.log(req); // TODO: for another PR --> https://github.com/winstonjs/winston
  if (req.body.email === "") {
    res.status(400).send("email required");
  }
  console.error(req.body.email);

  // TODO: Read this: https://eloquentjavascript.net/11_async.html

  // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  /*
    const somethingThatWillHappen = new Promise((resolver, reject) => { 

      // come logic
      resolve({id:"asdasd"})

    }).then(value => { }).catch()
  */

  const user = await User.findOne({
    email: req.body.email,
  });
  if (user === null) {
    console.error("email not in database");
    res
      .status(200)
      .send("If the email is in our database you will receive an email.");
  } else {
    const token = crypto.randomBytes(20).toString("hex");

    await user.update({
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 3600000,
    });
    const host =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://grossjungig.vercel.app/";

    const mailOptions = {
      from: "grossjungigplatform@gmail.com",
      to: `${user.email}`,
      subject: "Link To Reset Password",
      text:
        "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
        "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
        `${host}/reset/${token}\n\n` +
        "If you did not request this, please ignore this email and your password will remain unchanged.\n",
    };

    console.log("sending mail");

    // Callback pattern
    // TODO: 1. transform to promise
    // TODO: than use asyn / await
    // Read more here: https://eloquentjavascript.net/11_async.html
    // Try to use:
    // const { promisify } = require('util') --- see here: https://flaviocopes.com/node-promisify/

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error("there was an error: ", err);
      } else {
        console.log("here is the res: ", response);
        res.status(200).json("recovery email sent");
      }
    });
  }

  // const amailSend = promisfy(transporter.sendMail)(mailOptions, (err, response)
});

module.exports = router;
