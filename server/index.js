const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("this is backend server api");
});

app.use("/api/test", require("./api/testConnect"));

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
