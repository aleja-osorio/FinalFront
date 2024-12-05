import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
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
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Contacto de tu Dentista</h1>
      <table className={`detail-table ${state.theme}`}>
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Teléfono</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Sitio Web</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail;
