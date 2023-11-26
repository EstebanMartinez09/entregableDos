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

  return (
    <article className="text-center flex flex-col items-center justify-center gap-7 p-[3%] select-none">
      <h3 className="font-bold text-xl bg-gradient-to-tr from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text">
        {climate.name}, {climate.sys.country}
      </h3>

      <div className="flex flex-col gap-4 md:flex-row">
        {/* seccion: Temperatura, Ambiente y logo */}
        <section className="bg-custom-gray pt-[30px] pb-[30px] pl-[25px] pr-[25px] rounded-3xl grid grid-cols-[70%,30%] items-center gap-2">
          <h3 className="col-span-2 ">
            {capital(climate.weather[0].description)}
          </h3>

          <span className="text-[80.69px] font-light">
            {temperature}°{unit}
          </span>

          <div>
            <img
              className=" w-[68px] "
              src={`/estado-clima/${climate.weather[0].icon}.svg`}
              alt="SVG clima"
            />
          </div>
        </section>

        {/* seccion: Detalles adicionales del clima */}
        <section className="flex bg-custom-gray  justify-center gap-4 rounded-3xl py-[10px] px-[25px] md:flex-col md:gap-[20px] md:py-[30px] md:px-[15px]">
          <div className="flex justify-between items-center ">
            <div>
              <img src="/svg-parametros/velocidad.svg" alt="" />
            </div>
            <span className="mx-auto font-bold">{climate.wind.speed} m/s</span>
          </div>

          <div className="h-[75px] w-[3px] bg-gray-500 opacity-50 rounded-xl md:h-[3px] md:w-[90px] "></div>

          <div className="flex justify-between items-center min-w-[80px] ">
            <div>
              <img src="/svg-parametros/humedad.svg" alt="" />
            </div>
            <span className="mx-auto font-bold">{climate.main.humidity} %</span>
          </div>

          <div className="h-[75px] w-[3px] bg-gray-500 opacity-50 rounded-xl md:h-[3px] md:w-[90px] "></div>

          <div className=" flex justify-between items-center ">
            <div className="">
              <img src="/svg-parametros/presion.svg" alt="" />
            </div>
            <span className="mx-auto font-bold">
              {climate.main.pressure} hPa
            </span>
          </div>
        </section>
      </div>

      <button
        onClick={toggleTemperature}
        className="select-none bg-white text-[#4580BA] font-semibold w-[151px] h-[34px] rounded-3xl hover:bg-[#4580BA] hover:text-white transform hover:scale-110 transition-transform duration-300 shadow-md"
      >
        Cambiar a {unit === "C" ? "F°" : "C°"}
      </button>
    </article>
  );
};
export default WeatherInformation;
