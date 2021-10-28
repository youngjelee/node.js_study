"use strict";

const express = require("express");
//*****라우터*******//
const router = express.Router();

const ctrl = require("./home.ctrl.js");



router.get("/",ctrl.output.home);

router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);

module.exports = router; 