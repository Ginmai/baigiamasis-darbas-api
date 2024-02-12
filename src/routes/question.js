import express from "express";

const router = express.Router();

router.get("/question", function (req, res) {
  res.send("testas");
});

router.get("/question/:id", function (req, res) {
  res.send("testas");
});

router.post("/question", function (req, res) {
  res.send("testas");
});

router.put("/question/:id", function (req, res) {
  res.send("testas");
});

router.delete("/question/:id", function (req, res) {
  res.send("testas");
});

export default router;
