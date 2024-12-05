import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, [id]);

  if (!dentist) return <p>Loading...</p>;
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>{dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </>
  )
}

export default Detail;