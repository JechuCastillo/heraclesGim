import { useState } from "react";
function FormBeneficios({ onCancelar,onAgregado }) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    puntosRequeridos: 0,
  });
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!formData.nombre.trim())
      nuevosErrores.nombre = "El nombre es requerido";
    if (!formData.descripcion.trim())
      nuevosErrores.descripcion = "La descripcion es requerida";
    if (formData.puntosRequeridos <= 0)
      nuevosErrores.puntosRequeridos =
        "Los puntos requeridos deben ser mayores a 0";
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/beneficios/admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            nombreBeneficio: formData.nombre,
            descripcionBeneficio: formData.descripcion,
            precioPuntos: formData.puntosRequeridos,
          }),
        },
      );
      const data = await response.json();
      if (data.success) {
        onCancelar();
        onAgregado();
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.error("Error al agregar beneficio:", error);
    }
  };
  return (
    <>
      <form action="" className="formBeneficios" onSubmit={handleSubmit}>
        <h2>Agregar beneficio</h2>
        <div className="inputs">
          <label htmlFor="">Nombre del beneficio *</label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            className="inputBeneficio"
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
          <label htmlFor="">Descripcion *</label>
          <input
            type="text"
            value={formData.descripcion}
            onChange={(e) =>
              setFormData({ ...formData, descripcion: e.target.value })
            }
            className="inputBeneficio"
          />
          {errores.descripcion && (
            <span className="error">{errores.descripcion}</span>
          )}
          <label htmlFor="">Puntos requeridos *</label>
          <input
            type="number"
            value={formData.puntosRequeridos}
            onChange={(e) =>
              setFormData({
                ...formData,
                puntosRequeridos: parseInt(e.target.value),
              })
            }
            className="inputBeneficio"
          />
          {errores.puntosRequeridos && (
            <span className="error">{errores.puntosRequeridos}</span>
          )}
        </div>
        <div className="botonesBeneficios">
          <button type="button" className="cancelar" onClick={onCancelar}>
            Cancelar
          </button>
          <button type="submit" className="agregar" >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormBeneficios;
