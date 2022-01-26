import React from "react";
import css from "./styles.module.scss";
import wheater1 from "../../../../img/wheater1.png";
import wheater2 from "../../../../img/wheater2.png";
import wheater7 from "../../../../img/wheater4.png";
import wheater5 from "../../../../img/wheater5.png";
import wheater6 from "../../../../img/wheater6.png";

export default function IconWeather({ iconWeather }) {
  const [iconWeatherState, setIconWeatherState] = React.useState(wheater1);

  console.log("iconWeather");
  console.log(iconWeather);

  function calculateIconWeather() {
    if (iconWeather) {
      if (iconWeather[0].icon === "01n" || iconWeather[0].icon === "01d") {
        setIconWeatherState(wheater2);
      }
      if (
        iconWeather[0].icon === "02n" ||
        iconWeather[0].icon === "03n" ||
        iconWeather[0].icon === "03d" ||
        iconWeather[0].icon === "02d"
      ) {
        setIconWeatherState(wheater1);
      }
      if (iconWeather[0].icon === "04n" || iconWeather[0].icon === "04d") {
        setIconWeatherState(wheater5);
      }
      if (iconWeather[0].icon === "10d") {
        setIconWeatherState(wheater6);
      }
      if (iconWeather[0].icon === "13d") {
        setIconWeatherState(wheater7);
      }
    }
  }

  React.useEffect(() => {
    calculateIconWeather();
  }, [iconWeather]);

  return <img src={iconWeatherState}></img>;
}
