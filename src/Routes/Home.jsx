import axios from 'axios';
import { useEffect, useContext } from "react";
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      dispatch({ type: "SET_DATA", payload: response.data });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, [dispatch]);
  
  return (
    <div className={`card-grid ${state.theme}`}>
      {state.data.map((dentist) => (
        <Card key={dentist.id} {...dentist} />
      ))}
    </div>
  );
};
  
export default Home;