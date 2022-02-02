import React from "react";
import css from "./styles.module.scss";
import ReactLoading from "react-loading";
import { API_KEY } from "../../constants/config";
import { LNG } from "../../constants/config";
import ListCities from "./components/listCities/ListCities";
import IconWeather from "./components/iconWeather/iconWeather";
import InformationWeather from "./components/informationWeather/informationWeather";

export default function ContainerWheater() {
  // SUpuesta informacion de lista de ciudades API.
  const mockupCities = [
    { city: "Buenos Aires", lat: "-34.6132", lng: "-58.3772" },
    { city: "Misiones", lat: "-38.7409", lng: "-62.2643" },
    { city: "Mar del plata", lat: "-38.0023", lng: "-57.5575" },
    { city: "Bariloche", lat: "-41.1456", lng: "-71.3082" },
    { city: "Mendoza", lat: "-32.8908", lng: "-68.8272" },
  ];

  // Initialize currentCity with the first city supose get info API
  const [currentCity, setCurrentCity] = React.useState({
    city: mockupCities[0].city,
    lat: mockupCities[0].lat,
    lng: mockupCities[0].lng,
  });
  const [dataCity, setDataCity] = React.useState({});
  const [indexDayWeather, setIndexDayWeather] = React.useState(0);

  const handlerEditCity = (e) => {
    const filterCity = mockupCities.filter(
      (city) => city.city === e.target.value
    );
    setCurrentCity(...filterCity);
  };

  React.useEffect(() => {
    setDataCity({});
    fetch(
      `https://openweathermap.org/data/2.5/onecall?lat=${currentCity.lat}&lon=${currentCity.lng}&units=metric&appid=${API_KEY}&lang=${LNG}&exclude=current,minutely,hourly,alerts`
    )
      .then((response) => response.json())
      .then((data) => setDataCity(data));
  }, [currentCity]);

  function setIndexDayWeatherFunction(index) {
    setIndexDayWeather(index);
  }

  return (
    <div className={`${css.containerData}`}>
      <div className={`${css.header}`}>
        <h1>Weather Aplication</h1>
      </div>
      <div className={`${css.containerWeather}`}>
        <div className={`${css.filterCity}`}>
          <ListCities
            labelSelect="Choose a city: "
            listCities={mockupCities}
            handlerEdit={handlerEditCity}
          />
        </div>
        <div className={`${css.iconWheater}`}>
          {Object.keys(dataCity).length !== 0 ? (
            <IconWeather
              iconWeather={
                Object.keys(dataCity).length !== 0 &&
                dataCity.daily[indexDayWeather].weather
              }
            />
          ) : (
            <ReactLoading type="balls" color="#ccc" />
          )}
        </div>
      </div>
      <div className={`${css.temperature}`}>
        {Object.keys(dataCity).length !== 0 ? (
          <>
            <p>{dataCity.daily[indexDayWeather].weather[0].description}</p>
            <h2>{dataCity.daily[indexDayWeather].temp.day} °C</h2>
          </>
        ) : (
          <ReactLoading type="balls" color="#ccc" />
        )}
      </div>
      <div className={`${css.containerInformation}`}>
        {Object.keys(dataCity).length !== 0 ? (
          <InformationWeather
            dataCity={Object.keys(dataCity).length !== 0 ? dataCity : {}}
            indexDayWeather={indexDayWeather}
            setIndexDayWeatherFunction={setIndexDayWeatherFunction}
          />
        ) : (
          <ReactLoading type="balls" color="#ccc" />
        )}
      </div>
    </div>
  );
}
