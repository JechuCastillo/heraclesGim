import { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";
import FormBeneficios from "../components/FormBeneficios";
import Beneficio from "../components/Beneficio";
function Home() {
  const user = useAuthStore((state) => state.user);
  const [modal, setModal] = useState(false);
  const [beneficios, setBeneficios] = useState([]);
  //Administracion de recompensas
  const recargarBeneficios = ()=>{
    
    fetch("http://localhost:3000/api/beneficios/admin/listar", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBeneficios(data.data);
        }
      });

  }
  
  useEffect(() => {
    fetch("http://localhost:3000/api/beneficios/admin/listar", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBeneficios(data.data);
        }
      });
  }, []);

  /*Aqui se recibira a la persona y se le dara la bienvenida por su nombre*/
  return (
    <div className="home">
      <h1>Bienvenido {user?.nombre}</h1>
      <h2>Administración de beneficios</h2>
      <button onClick={() => setModal(!modal)}>Agregar nuevo beneficio </button>
      {modal && <FormBeneficios onCancelar={() => setModal(!modal)} onAgregado={recargarBeneficios}/>}
      <section className="containerBeneficios">
        {beneficios.map((b)=>(
          <Beneficio
            key={b.idBeneficio}
            nombre={b.nombreBeneficio}
            descripcion={b.descripcionBeneficio}
            puntos={b.precioPuntos}
          />

        ))}
      </section>
    </div>
  );
}

export default Home;
