const express = require("express");
const router = express.Router();
const { pool } = require("../database/dbInfo");

router.get("/", async (req, res) => {
  try {
    await pool.connect();
    const result = await pool.request().query("select * from test");
    const test = result.recordset;

    res.json(test);
    console.log(test);
  } catch (err) {
    console.log("hihi");
    res.status(500).json(err);
  }
});

module.exports = router;
