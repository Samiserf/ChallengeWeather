import React from "react";
import css from "./styles.module.scss";

export default function InformationWeather({
  dataCity,
  indexDayWeather,
  setIndexDayWeatherFunction,
}) {
  return (
    <>
      <div className={`${css.toogleDaysInformation}`}>
        {Object.keys(dataCity).length !== 0 && (
          <select onChange={(e) => setIndexDayWeatherFunction(e.target.value)}>
            {dataCity.daily.map((currentWeather, index) => {
              return (
                <option key={index} value={index}>
                  {index === 0
                    ? "Today"
                    : index === 1
                    ? "Tomorrow"
                    : `In ${index} days`}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div className={`${css.wrapInformation}`}>
        {Object.keys(dataCity).length !== 0 ? (
          <>
            <div className={`${css.information}`}>
              <div>
                <h4>Temperature min: </h4>
                <span>{dataCity.daily[indexDayWeather].temp.min} °c</span>
              </div>
              <div>
                <h4>Temperature max: </h4>
                <span>{dataCity.daily[indexDayWeather].temp.max} °c</span>
              </div>
              <div>
                <h4>Humedity: </h4>
                <span>{dataCity.daily[indexDayWeather].humidity}</span>
              </div>
            </div>
            <div className={`${css.information}`}>
              <div>
                <h4>Clouds: </h4>
                <span>{dataCity.daily[indexDayWeather].clouds} %</span>
              </div>
              <div>
                <h4>Feels like: </h4>
                <span>{dataCity.daily[indexDayWeather].feels_like.day} °c</span>
              </div>
              <div>
                <h4>Wind: </h4>
                <span>{dataCity.daily[indexDayWeather].wind_speed} km/h</span>
              </div>
            </div>
          </>
        ) : (
          <h1>Cargando la informacion</h1>
        )}
      </div>
    </>
  );
}
