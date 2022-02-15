const usersRouter = require("./usersRouter");
const biodataRouter = require("./biodataRouter");
const historiesRouter = require("./historiesRouter");

const router = require("express").Router();

// "/"
router.get("/", (req, res) => {
  res.render("dash");
});

router.use("/users", usersRouter);
router.use("/biodata", biodataRouter);
router.use("/histories", historiesRouter);

module.exports = router;
