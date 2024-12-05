
import { createContext,useReducer,useMemo } from "react";
import PropTypes from "prop-types";

//estado inicial del contexto
export const initialState = {theme: "light", data: []}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

// validaciones de las props
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validación -children nodo  obligatorio
};