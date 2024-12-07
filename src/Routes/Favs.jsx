import { useContext, useState, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";
import '../index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) || []);
  }, []);

  const removeFav = (id) => {
    const updatedFavs = favs.filter(fav => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    setFavs(updatedFavs); // Actualiza el estado local sin recargar la página
  };

  return (
    <div className={`card-grid ${state.theme}`}>
      {favs.map((fav) => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          username={fav.username}
          isFavPage={true}
          removeFav={removeFav}
        />
      ))}
    </div>
  );
};

export default Favs;
