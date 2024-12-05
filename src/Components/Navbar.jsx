import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import sunImage from '../assets/sol.png'; 
import moonImage from '../assets/luna.png';
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  useEffect(() => { document.body.className = state.theme; }, [state.theme]);

  return (
    /* Aqui deberan agregar los liks correspondientes a las rutas definidas */
    /* Deberan implementar ademas la logica para cambiar de Theme con el button */
    <nav className={`nav ${state.theme === "dark" ? "dark" : ""}`}>
      <h1>DH ODONTO </h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
        <button onClick={() => 
          dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" })} className="theme-toggle-button" >
          <img src={state.theme === "light" ? moonImage : sunImage} 
          alt={state.theme === "light" ? "Switch to dark mode" : "Switch to light mode"} className="theme-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar