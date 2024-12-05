import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import doctorImage from '../assets/doctor.jpg';
import starImage from '../assets/estrella.png'
import '../index.css'

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const updatedFavs = [...favs, { id, name, username }];
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={doctorImage} alt="Doctor" className="card-img" />
        <h3>{name}</h3>
        <p>{username}</p>
        <Link to={`/dentist/${id}`}>Detalle</Link>
        <button onClick={addFav} className="favButton"> 
          <img src={starImage} alt="Add to favorites" className="star-img" />
        </button>
    </div>
  );
};

// Validación de props
Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
