const express = require("express");
const router = express.Router();
const { crearBeneficio,desactivarBeneficio } = require("../controllers/beneficiosController");

router.post("/admin", crearBeneficio);
router.put("/admin/:id", desactivarBeneficio);


module.exports = router;