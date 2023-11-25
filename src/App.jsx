import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformation from "./components/WeatherInformation";

function App() {
  const [climate, setClimate] = useState(null);

  const success = (pos) => {
    const {
      coords: { latitude: lat, longitude: lon },
    } = pos;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d5f2d56ffb1b1dc61a271c9d9286c1d&lang=es&units=metric`
      )
      .then(({ data }) => {
        setClimate(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className="bg-black text-white h-screen flex items-center justify-center bg-[url(/)]">
      {
        climate ? <WeatherInformation climate={climate} /> : "...cargando"
      }
    </main>
  );
}

export default App;
