const { body, validationResult } = require("express-validator");
const Beneficios = require("../models/Beneficios");

async function crearBeneficio(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.error("Errores de validacion", 400, errors.array());
  }
  try {
    const nuevoBeneficio = new Beneficios(req.body);
    await nuevoBeneficio.save();
    res.success(nuevoBeneficio);
  } catch (error) {
    res.error(error.message, 500);
  }
}

async function desactivarBeneficio(req, res) {
  try {
    const beneficio = await Beneficios.findByPk(req.params.id);
    if(!beneficio){
        return res.error("Beneficio no encontrado", 404);
    }
    beneficio.activo = false;
    await beneficio.save();
    res.success(beneficio);
  } catch (error) {
    res.error(error.message, 500);
  }
}

module.exports = { crearBeneficio, desactivarBeneficio };
