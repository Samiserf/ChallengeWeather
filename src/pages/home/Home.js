import React from "react";
import css from "./styles.module.scss";
import ContainerWheater from "../../components/ContainerWheater/ContainerWheater";

export default function Home() {
  return (
    <>
      <section className={`${css.portada_contenido} portada_contenido`}>
        <ContainerWheater />
      </section>
    </>
  );
}
