import { useContext } from "react"; 
import { ContextGlobal } from "../Components/utils/global.context";
import doctorImage from '../assets/doctor.jpg';
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className={`card-grid ${state.theme}`}>
      {favs.map((fav) => (
        <div className="card" key={fav.id}>
          <img src={doctorImage} alt="Doctor" className="card-img" />
          <h3>{fav.name}</h3>
          <p>{fav.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Favs;
