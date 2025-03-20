import { useEffect, useState } from "react";
import useFetchApi from "./hocks/useFechApi";
import ResidentsList from "./components/ResidentsList";
import "./App.css";
import LocationInfo from "./components/LocationInfo.jsx";
import Search from "./components/Search";
import Hero from "./components/Hero";
import { getRandomNumber } from "./utils";
const baseUrl = "https://rickandmortyapi.com/api/location/";

function App() {
  const { data: location, request } = useFetchApi();
  const [locationId, setLocationId] = useState(getRandomNumber);
  const [loading, setLoading] = useState(true); // Nuevo estado para el loading

  useEffect(() => {
    setLoading(true); // Activar el estado de carga antes de la petición
    request(`${baseUrl}/${locationId}`)
    .finally(() => {
    setTimeout(() => setLoading(false), 2000)}
)}, [locationId]);

return (
  <div>
    {/* Hero */}
    <div className="hero">
      {<Hero />}
    </div>

    {/* Search */}
  
    {<Search setLocationId={setLocationId} />}   
    

    {/* Loader */}
    {loading && (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )}

    {/* Contenido principal (solo si no está cargando) */}
    {!loading && (
      <>
        <pre>{/* {JSON.stringify(location, null, 2)} */}</pre>

        {/* Location */}
        <div className="location">
          {location && <LocationInfo location={location} />}
        </div>

        {/* ResidentList */}
        {location && <ResidentsList residents={location.residents} />}
      </>
    )}
  </div>
);

}

export default App;
