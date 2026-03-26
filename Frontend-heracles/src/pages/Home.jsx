import { useEffect } from "react";
import { useAuthStore } from "../stores/authStore";

function Home() {
const user = useAuthStore((state) => state.user);  
    useEffect(() => {
      console.log(user);
    })
  /*Aqui se recibira a la persona y se le dara la bienvenida por su nombre*/
  return (
    <div className="home">
      <h1>Bienvenido {user?.nombre}</h1>
    </div>
  );
}

export default Home;
