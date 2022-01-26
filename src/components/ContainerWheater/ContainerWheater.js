import React from "react";
import css from "./styles.module.scss";
import { API_KEY } from "../../constants/config";
import { LNG } from "../../constants/config";
import ListCities from "./components/listCities/ListCities";
import IconWeather from "./components/iconWeather/iconWeather";

export default function ContainerWheater() {
  const [currentCity, setCurrentCity] = React.useState("3435910");
  const [dataCity, setDataCity] = React.useState({});

  const mockupCities = [
    { city: "Buenos Aires", id: "3435910" },
    { city: "Misiones", id: "3865086" },
    { city: "Mar del plata", id: "3430863" },
    { city: "Bariloche", id: "7647007" },
    { city: "Mendoza", id: "3844421" },
  ];

  const handlerEditCity = (e) => {
    setCurrentCity(e.target.value);
  };

  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${currentCity}&appid=${API_KEY}&lang=${LNG}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setDataCity(data));
  }, [currentCity]);

  return (
    <div className={`${css.containerData}`}>
      <div className={`${css.filterCity}`}>
        <ListCities listCities={mockupCities} handlerEdit={handlerEditCity} />
      </div>
      <div className={`${css.iconWheater}`}>
        <IconWeather iconWeather={dataCity && dataCity.weather} />
      </div>
      <div className={`${css.temperature}`}>
        <h1>
          {dataCity.weather ? dataCity.weather[0].description : "Cargando"}
        </h1>
        <h2>{dataCity.main ? dataCity.main.temp : "Cargando"}</h2>
      </div>
      <div className={`${css.containerInformation}`}>
        <div className={`${css.information}`}>
          <div>
            <h4>Temperature min: </h4>
            <span>{dataCity.main ? dataCity.main.temp_min : "Cargando"}</span>
          </div>
          <div>
            <h4>Temperature max: </h4>
            <span>{dataCity.main ? dataCity.main.temp_max : "Cargando"}</span>
          </div>
          <div>
            <h4>Humedad: </h4>
            <span>
              {dataCity.main ? `${dataCity.main.humidity}%` : "Cargando"}
            </span>
          </div>
          <div>
            <h4>Wind: </h4>
            <span>
              {dataCity.wind ? `${dataCity.wind.speed} km/h` : "Cargando"}
            </span>
          </div>
        </div>
        <div className={`${css.information}`}>
          <div>
            <h4>Visibilidad: </h4>
            <span>{dataCity.main ? dataCity.main.temp : "Cargando"}</span>
          </div>
          <div>
            <h4>Porcentaje de nubes: </h4>
            <span>
              {dataCity.clouds ? `${dataCity.clouds.all}%` : "Cargando"}
            </span>
          </div>
          <div>
            <h4>Se siente como: </h4>
            <span>{dataCity.main ? dataCity.main.feels_like : "Cargando"}</span>
          </div>
          <div>
            <h4>Presion atmoferica: </h4>
            <span>{dataCity.main ? dataCity.main.pressure : "Cargando"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
