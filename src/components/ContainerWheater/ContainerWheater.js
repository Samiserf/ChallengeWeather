import React from "react";
import css from "./styles.module.scss";
import { API_KEY } from "../../constants/config";
import ListCities from "./components/ListCities";
import wheater1 from "../../img/wheater1.png";
import wheater2 from "../../img/wheater2.png";
import wheater3 from "../../img/wheater3.png";
import wheater4 from "../../img/wheater4.png";
import wheater5 from "../../img/wheater5.png";
import wheater6 from "../../img/wheater6.png";

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
    console.log("Call to api wheater");
    console.log(currentCity);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${currentCity}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setDataCity(data));
  }, [currentCity]);

  console.log(dataCity);

  return (
    <div className={`${css.containerData}`}>
      <div className={`${css.filterCity}`}>
        <ListCities listCities={mockupCities} handlerEdit={handlerEditCity} />
      </div>
      <div className={`${css.iconWheater}`}>
        <img src={wheater2}></img>
      </div>
      <div className={`${css.temperature}`}>33°</div>
      <div className={`${css.containerInformation}`}>
        <div className={`${css.information}`}>
          <div>
            <h4>Temperature min: </h4>
            <span>32</span>
          </div>
          <div>
            <h4>Temperature max: </h4>
            <span>32</span>
          </div>
          <div>
            <h4>Humedity: </h4>
            <span>32</span>
          </div>
          <div>
            <h4>Wind: </h4>
            <span>32</span>
          </div>
        </div>
        <div className={`${css.information}`}>
          <div>
            <h4>Temperature min: </h4>
            <span>32</span>
          </div>
          <div>
            <h4>Temperature max: </h4>
            <span>32</span>
          </div>
          <div>
            <h4>Humedity: </h4>
            <span>32</span>
          </div>
          <div>
            <h4>Wind: </h4>
            <span>32</span>
          </div>
        </div>
      </div>
    </div>
  );
}
