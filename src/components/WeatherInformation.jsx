const WeatherInformation = ({ climate }) => {
  console.log(climate);


  return (
    <article>
      <h3>{ climate.name }, { climate?.sys.country }</h3>

      <div>
        {/* seccion: Temperatura, Ambiente y logo */}
      <section>
        <h3>{ climate.weather[0].description }</h3>

        <span>{ Math.floor(climate.main.temp) }° C</span>

        <div>
          <img src={`/estado-clima/${climate.weather[0].icon}.svg`} alt="" />
        </div>
      </section>
      
      {/* seccion: Detalles adicionales del clima */}
      <section>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <span>{climate.wind.speed} m/s</span>
        </div>

        <div>
          <div>
            <img src="" alt="" />
          </div>
          <span>{climate.main.humidity} %</span>
        </div>

        <div>
          <div>
            <img src="" alt="" />
          </div>
          <span>{climate.main.pressure} hPa</span>
        </div>
      </section>
      </div>

      <button>Cambiar a f</button>
    </article>
  );
};
export default WeatherInformation;
