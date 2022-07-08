var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const db = require("../model/helper");

/* GET user reviews. */
router.get("/", async function (req, res, next) {
  try {
    const results = await db("SELECT * FROM reviews;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* GET one user review */
router.get("/:id", async (req, res) => {
  try {
    const results = await db(
      `SELECT * FROM reviews WHERE id=${req.params.id};`
    );
    let reviews = results.data;
    if (reviews.length === 0) {
      res.status(404).send({ error: "Review not found" });
    } else {
      res.send(reviews[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/* INSERT a new review into the DB */
router.post("/", async (req, res) => {
  const {
    city,
    country,
    traveldate,
    ratesafety,
    rateaffordability,
    rateaccessibility,
    photos,
    username,
    optional,
  } = req.body;
  try {
    const post = await db(
      `INSERT INTO reviews (city, country, traveldate, ratesafety, rateaffordability, rateaccessibility, photos, username, optional) 
      VALUES ('${city}', '${country}', '${traveldate}', '${ratesafety}', '${rateaffordability}', '${rateaccessibility}', '${photos}', '${username}', '${optional}');`
    );
    const results = await db("SELECT * FROM reviews;");

    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
