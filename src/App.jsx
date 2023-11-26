import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformation from "./components/WeatherInformation";
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";

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

  const bagraunds = {
    '01d': 'bg-[url(/bagraunds/01d.jpg)]',
    '01n': 'bg-[url(/bagraunds/01n.jpg)]',
    '02d': 'bg-[url(/bagraunds/02d.jpg)]',
    '02n': 'bg-[url(/bagraunds/02n.jpg)]',
    '03d': 'bg-[url(/bagraunds/03d.jpg)]',
    '03n': 'bg-[url(/bagraunds/03n.jpg)]',
    '04d': 'bg-[url(/bagraunds/04d.jpg)]',
    '04n': 'bg-[url(/bagraunds/04n.jpg)]',
    '09d': 'bg-[url(/bagraunds/09d.jpg)]',
    '09n': 'bg-[url(/bagraunds/09n.jpg)]',
    '10d': 'bg-[url(/bagraunds/10d.jpg)]',
    '10n': 'bg-[url(/bagraunds/10n.jpg)]',
    '11d': 'bg-[url(/bagraunds/11d.jpg)]',
    '11n': 'bg-[url(/bagraunds/11n.jpg)]',
    '13d': 'bg-[url(/bagraunds/13d.jpg)]',
    '13n': 'bg-[url(/bagraunds/13n.jpg)]',
    '50d': 'bg-[url(/bagraunds/50d.jpg)]',
    '50n': 'bg-[url(/bagraunds/50n.jpg)]',

  }
  

  return (
    <main
      className={` text-black h-screen flex items-center justify-center ${bagraunds[climate?.weather[0].icon]} bg-cover bg-center`}
    >
      {climate ? <WeatherInformation climate={climate} /> : "...cargando"}
    </main>
  );
}

export default App;
