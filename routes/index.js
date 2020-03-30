const express = require('express');

const router = express.router();

router.get("/", (req, res) => res.send("call back at root"));


module.exports = router;