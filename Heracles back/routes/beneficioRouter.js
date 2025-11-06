const express = require("express");
const router = express.Router();
const { crearBeneficio,desactivarBeneficio, activarBeneficio, listarBeneficios, listarBeneficioUnico } = require("../controllers/beneficiosController");

router.post("/admin", crearBeneficio);
router.put("/admin/desactivar/:id", desactivarBeneficio);
router.put("/admin/activar/:id", activarBeneficio);
router.get("/admin/listar", listarBeneficios);
router.get("/admin/listar/:id", listarBeneficioUnico);


module.exports = router;