import React from "react";
import css from "./styles.module.scss";

export default function ContainerWheater({ listCities, handlerEdit }) {
  return (
    <>
      <p>Seleccione una ciudad: </p>
      <select onChange={(e) => handlerEdit(e)}>
        {listCities.map((city) => {
          return (
            <option key={city.id} value={city.id}>
              {city.city}
            </option>
          );
        })}
      </select>
    </>
  );
}
