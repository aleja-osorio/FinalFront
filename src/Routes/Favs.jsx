//import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className="card-grid">
      {favs.map((fav) => (
        <div className="card" key={fav.id}>
          <h3>{fav.name}</h3>
          <p>{fav.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Favs;
