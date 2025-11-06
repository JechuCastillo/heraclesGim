const express = require("express");
const router = express.Router();
const { crearBeneficio,desactivarBeneficio, activarBeneficio } = require("../controllers/beneficiosController");

router.post("/admin", crearBeneficio);
router.put("/admin/desactivar/:id", desactivarBeneficio);
router.put("/admin/activar/:id", activarBeneficio);


module.exports = router;