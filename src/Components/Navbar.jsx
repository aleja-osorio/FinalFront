import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    /* Aqui deberan agregar los liks correspondientes a las rutas definidas */
    /* Deberan implementar ademas la logica para cambiar de Theme con el button */
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button 
      onClick={() => 
      dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" })}
      >
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar