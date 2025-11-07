const { body, validationResult } = require("express-validator");
const Beneficios = require("../models/Beneficios");
const jwt = require("../service/jwtService");
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
    if (!beneficio) {
      return res.error("Beneficio no encontrado", 404);
    }
    beneficio.activo = false;
    await beneficio.save();
    res.success(beneficio);
  } catch (error) {
    res.error(error.message, 500);
  }
}

async function activarBeneficio(req, res) {
  try {
    const beneficio = await Beneficios.findByPk(req.params.id);
    if (!beneficio) {
      return res.error("Beneficio no encontrado", 404);
    }
    beneficio.activo = true;
    await beneficio.save();
    res.success(beneficio);
  } catch (error) {
    res.error(error.message, 500);
  }
}

async function listarBeneficios(req, res) {
  try {
    const beneficios = await Beneficios.findAll();
    res.success(beneficios);
  } catch (error) {
    res.error(error.message, 500);
  }
}

async function listarBeneficioUnico(req, res) {
  try {
    const beneficio = await Beneficios.findByPk(req.params.id);
    if (!beneficio) {
      return res.error("Beneficio no encontrado", 404);
    }
    res.success(beneficio);
  } catch (error) {
    res.error(error.message, 500);
  }
}

async function modificarBeneficio(req, res) {
  try {
    const beneficio = await Beneficios.findByPk(req.params.id);
    if (!beneficio) {
      return res.error("Beneficio no encontrado", 404);
    }
    beneficio.nombreBeneficio = req.body.nombreBeneficio;
    beneficio.descripcionBeneficio = req.body.descripcionBeneficio;
    beneficio.precioPuntos = req.body.precioPuntos;
    await beneficio.save();
    res.success(beneficio);
  } catch (error) {
    res.error(error.message, 500);
  }
}

const validarBeneficio = [
  body("nombreBeneficio")
    .trim()
    .notEmpty()
    .withMessage("El nombre es requerido")
    .isLength({ max: 150 }),
  body("descripcionBeneficio")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("La descripcion es requerida"),
  body("precioPuntos")
    .isInt()
    .withMessage("El precio es requerido")
    .isInt({ min: 1 })
    .withMessage("El precio debe ser mayor a 0"),
];

module.exports = {
  crearBeneficio,
  desactivarBeneficio,
  activarBeneficio,
  listarBeneficios,
  listarBeneficioUnico,
  modificarBeneficio,
  validarBeneficio
};
