import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import LayoutLogin from "./components/LayoutLogin";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutLogin></LayoutLogin>}>
        <Route index element={<Login></Login>}></Route>
        <Route path="/register" element={<Registro></Registro>}></Route>
      </Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
