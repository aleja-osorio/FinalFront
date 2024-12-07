import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import doctorImage from '../assets/doctor.jpg';
import starImage from '../assets/estrella.png';
import '../index.css';

  const Card = ({ name, username, id, isFavPage = false, removeFav }) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const addFav = () => {
      const favs = JSON.parse(localStorage.getItem("favs")) || [];
      if (!favs.some(fav => fav.id === id)) {
        const updatedFavs = [...favs, { id, name, username }];
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
      } else {
        alert("Se agregó a favoritos con éxito");
      }
    };
  
    return (
      <div className="card">
        <img src={doctorImage} alt="Doctor" className="card-img" />
        <h3>{name}</h3>
        <p>{username}</p>
        <Link to={`/dentist/${id}`}>Detalle</Link>
        {isFavPage ? (
          <button onClick={() => removeFav(id)} className="removeButton">
            Eliminar
          </button>
        ) : (
          <button onClick={addFav} className="favButton">
            <img src={starImage} alt="Add to favorites" className="star-img" />
          </button>
        )}
      </div>
    );
  };
  
  // Validación de props
  Card.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isFavPage: PropTypes.bool,
    removeFav: PropTypes.func
  };
  
  export default Card;
  