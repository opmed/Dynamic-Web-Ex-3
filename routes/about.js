const express = require('express');

const router = express.router();

router.get("/", (req, res) => res.send("About this app"));
router.get("/me", (req, res) => res.send("About me"));

module.exports = router;