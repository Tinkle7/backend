const express = require("express");
const { connection } = require("./connection");
require("dotenv").config();
const { userRouter } = require("./routes/Users.routes");

const app = express();
app.use(express.json());

//home
app.get("/", (req, res) => {
  res.send("HOME");
});

app.use("/data", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log("cannot connected to DB");
    console.log(error);
  }
  console.log(`Running the server at port ${process.env.port}`);
});
