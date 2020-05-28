/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const usersRoutes = require("./users");
const commentsRoutes = require("./comments");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/api", usersRoutes);
router.use("/api", commentsRoutes);

module.exports = router;
