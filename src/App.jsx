import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformation from "./components/WeatherInformation";
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";
import bagraunds from "./utils/backgrounds";

countries.registerLocale(es);

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
        const countryCode = data.sys.country;
        const countryName = countries.getName(countryCode, "es");
        data.sys.country = countryName;
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
    <main
      className={` text-black h-screen flex items-center justify-center ${
        bagraunds[climate?.weather[0].icon]
      } bg-cover bg-center`}
    >
      {climate ? <WeatherInformation climate={climate} /> : "...cargando"}
    </main>
  );
}

export default App;
