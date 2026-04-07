import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import FormBeneficios from "../components/FormBeneficios";
function Home() {
const user = useAuthStore((state) => state.user); 
const [modal, setModal] = useState(false);
//Administracion de recompensas 
    
  /*Aqui se recibira a la persona y se le dara la bienvenida por su nombre*/
  return (
    <div className="home">
      <h1>Bienvenido {user?.nombre}</h1>
      <h2>Administración de beneficios</h2>
      <button onClick={() => setModal(!modal)}>Agregar nuevo beneficio </button>
      {modal && <FormBeneficios onCancelar={() => setModal(!modal)} />}
    </div>
  );
}

export default Home;
