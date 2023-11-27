import axios from "axios";
import { useEffect, useState } from "react";
import WeatherInformation from "./components/WeatherInformation";
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";
import bagraunds from "./utils/backgrounds";
import HandleError from "./components/HandleError";
import Loading from "./components/Loading";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import FormCity from "./components/FormCity";


countries.registerLocale(es);

function App() {
  const [climate, setClimate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, handleError);
  }, []);

  const handleError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setError(err);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d5f2d56ffb1b1dc61a271c9d9286c1d&lang=es&units=metric`
      )
      .then(({ data }) => {
        const countryCode = data.sys.country;
        const countryName = countries.getName(countryCode, "es");
        data.sys.country = countryName;
        setClimate(data);
      })
      .catch((err) => {
        console.log(err);
        alert(`Ciudad ${city} no encontrada`);
      });
  };

  return (
    <main
      className={` text-black h-screen flex w-screen items-center justify-center ${
        error
          ? "bg-[url(/bagraunds/error.jpg)] bg-cover bg-center "
          : bagraunds[climate?.weather[0].icon]
      } bg-cover bg-center`}
    >

      <SwitchTransition>
        <CSSTransition
          key={
            error ? "HandleError" : climate ? "WeatherInformation" : "Loading"
          }
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          {error ? (
            <HandleError error={error} />
          ) : climate ? (
            <div>
              <FormCity handleSubmit={handleSubmit} />

              <WeatherInformation climate={climate} />
            </div>
          ) : (
            <Loading />
          )}
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}

export default App;
