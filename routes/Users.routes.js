const express = require("express");

const { userModal } = require("../model/Users.model");

const userRouter = express.Router();

// all
userRouter.get("/", async (req, res) => {
  let query = req.query;
  try {
    const users = await userModal.find(query);
    res.send(users);
  } catch (error) {
    res.send({ msg: "cannot get", err: error.message });
  }
});

// single
userRouter.get("/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const user = await userModal.find({ _id: ID });
    res.send(user);
  } catch (error) {
    res.send({ msg: "cannot get", err: error.message });
  }
});

// add
userRouter.post("/add", async (req, res) => {
  try {
    const user = new userModal(req.body);
    await user.save();
    res.send("user added");
  } catch (error) {
    res.send({ msg: "cannot add", err: error.message });
  }
});

// delete
userRouter.delete("/remove/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await userModal.findByIdAndDelete({ _id: ID });
    res.send({ msg: "user get removed" });
  } catch (error) {
    res.send({ msg: "cannot removed", err: error.message });
  }
});

module.exports = {
  userRouter,
};
