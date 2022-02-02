import React from "react";
import css from "./styles.module.scss";

export default function ContainerWheater({
  labelSelect,
  listCities,
  handlerEdit,
}) {
  return (
    <>
      <h3>{labelSelect}</h3>
      <select onChange={(e) => handlerEdit(e)}>
        {listCities.map((city) => {
          return (
            <option key={city.id} value={city.city}>
              {city.city}
            </option>
          );
        })}
      </select>
    </>
  );
}
