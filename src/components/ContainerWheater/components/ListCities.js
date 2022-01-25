import React from "react";

export default function ContainerWheater({ listCities, handlerEdit }) {
  console.log(listCities);
  return (
    <select onChange={(e) => handlerEdit(e)}>
      {listCities.map((city) => {
        return (
          <option key={city.id} value={city.id}>
            {city.city}
          </option>
        );
      })}
    </select>
  );
}
