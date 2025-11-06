const express = require("express");
const router = express.Router();
const { crearBeneficio } = require("../controllers/beneficiosController");

router.post("/admin", crearBeneficio);

module.exports = router;