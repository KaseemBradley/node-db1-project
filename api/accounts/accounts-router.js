const router = require("express").Router();
const db = require("../../data/db-config");
const middleware = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accountWithId = await Account.getById(req.params.id);
    res.json(accountWithId);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

// eslint-disable-next-line
router.use((err, req, res, next) => {
  // DO YOUR MAGIC
  res.status(err.status || 404).json({
    message: err.message,
  });
});

module.exports = router;
