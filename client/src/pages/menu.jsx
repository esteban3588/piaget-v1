import React from "react";
import "../style/menu.css";
import Navegacion from "../components/navbar";
import Final from "../components/final";
function Home() {
  return (
    <>
      <Navegacion usuario="Usuario" />
      <main style={{ padding: "20px" }}>
        <section>
          <h2>Bienvenido al Instituto Jean Piaget</h2>
          <p>Brindamos educación secundaria de calidad.</p>
        </section>
      </main>
      <Final />
    </>
  );
}

export default Home;
