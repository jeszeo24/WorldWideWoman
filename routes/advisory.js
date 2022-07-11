// var express = require("express");
// const res = require("express/lib/response");
// var router = express.Router();
// const db = require("../model/helper");

// /* GET travel advisories. */
// router.get("/", async function (req, res, next) {
//   try {
//     const results = await db("SELECT * FROM advisory;");

//     res.send(results.data);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

// /* GET travel advisory from one country */
// router.get("/:id", async (req, res) => {
//   try {
//     const results = await db(
//       `SELECT * FROM advisory WHERE id=${req.params.id};`
//     );
//     let advisory = results.data;
//     if (advisory.length === 0) {
//       res.status(404).send({ error: "Travel advisory not found" });
//     } else {
//       res.send(advisory[0]);
//     }
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

// module.exports = router;
