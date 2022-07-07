var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const db = require("../model/helper");

/* GET users */
router.get("/", async function (req, res, next) {
  try {
    const results = await db("SELECT * FROM users;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* GET one user */
router.get("/:id", async (req, res) => {
  try {
    const results = await db(`SELECT * FROM users WHERE id=${req.params.id};`);
    let users = results.data;
    if (users.length === 0) {
      res.status(404).send({ error: "User not found" });
    } else {
      res.send(users[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* INSERT a new user into the DB */
router.post("/", async (req, res) => {
  const {
    preferredname,
    age,
    favedestination,
    likes,
    instagram,
    profilephoto,
  } = req.body;
  try {
    const post = await db(
      `INSERT INTO users (preferredname, age, favedestination, likes, instagram, profilephoto) 
      VALUES ('${preferredname}', '${age}', '${favedestination}', '${likes}', '${instagram}', '${profilephoto}');`
    );
    const results = await db("SELECT * FROM users;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
