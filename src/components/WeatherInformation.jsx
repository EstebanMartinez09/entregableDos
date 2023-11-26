import { useState } from "react";

const WeatherInformation = ({ climate }) => {
  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const tempC = climate.main.temp;
  const [temperature, setTemperature] = useState(Math.floor(tempC));
  const [unit, setUnit] = useState("C");

  const toggleTemperature = () => {
    if (unit === "C") {
      const tempF = tempC * (9 / 5) + 32;
      setTemperature(Math.floor(tempF));
      setUnit("F");
    } else {
      setTemperature(Math.floor(tempC));
      setUnit("C");
    }
  };

  console.log(climate)

  return (
    <article className="text-center ">
      <h3>
        {climate.name}, {climate.sys.country}
      </h3>

      <div className="flex flex-col gap-4 ">
        {/* seccion: Temperatura, Ambiente y logo */}
        <section className="bg-custom-gray pt-[30px] pb-[30px] pl-[25px] pr-[25px] rounded-3xl grid grid-cols-2 items-center">
          <h3 className="col-span-2">
            {capital(climate.weather[0].description)}
          </h3>

          <span className="text-[60px]">
            {temperature}° {unit}
          </span>

          <div>
            <img
              className="block mx-auto"
              src={`/estado-clima/${climate.weather[0].icon}.svg`}
              alt="SVG clima"
            />
          </div>
        </section>

        {/* seccion: Detalles adicionales del clima */}
        <section className="flex bg-custom-gray items-center justify-center gap-4 rounded-3xl pt-[30px] pb-[30px] pl-[25px] pr-[25px]">
          <div className="flex gap-2 ">
            <div>
              <img src="/svg-parametros/velocidad.svg" alt="" />
            </div>
            <span>{climate.wind.speed} m/s</span>
          </div>

          <div className="flex gap-2 ">
            <div>
              <img src="/svg-parametros/humedad.svg" alt="" />
            </div>
            <span>{climate.main.humidity} %</span>
          </div>

          <div className="flex gap-2 ">
            <div>
              <img src="/svg-parametros/presion.svg" alt="" />
            </div>
            <span>{climate.main.pressure} hPa</span>
          </div>
        </section>
      </div>

      <button onClick={toggleTemperature}>
        Cambiar a {unit === "C" ? "F°" : "C°"}
      </button>
    </article>
  );
};
export default WeatherInformation;
