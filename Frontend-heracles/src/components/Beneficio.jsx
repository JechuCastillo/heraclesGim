import styles from "./styles/Beneficio.module.css";
function Beneficio({ nombre, descripcion, puntos }) {
  return (
    <article className={styles.card}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>{puntos} PUNTOS</p>
      <div className={styles.botonesContainer}>
        <button className={styles.botones+' '+styles.editar}>EDITAR</button>
        <button className={styles.botones+' '+styles.desactivar}>DESACTIVAR</button>
      </div>
    </article>
  );
}

export default Beneficio;