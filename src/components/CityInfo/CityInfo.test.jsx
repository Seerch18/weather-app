import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; // SUT: Subject under testing (objeto del testeo)

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  const city = "Córdoba";
  const country = "España";
  // Render: renderiza el componente y retorna una serie de funciones de utilidad
  // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
  // Vamos  a analizar su estado en el "Assert"
  const { findAllByRole } = render(
    <CityInfo city={city} country={country}></CityInfo>
  );
  // Assert
  // findAllByRole nos va a buscar (en este caso) todos los componentes que sean
  // "heading" => H1, H2, H3... etc
  // El resultado es un arraly de componentes (cityAndCountryComponents)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const cityAndCountryComponents = await findAllByRole("heading");

  // ¿Cúando ael test va ser correcto?
  // Definición:
  // Cuando en el primer elemento (heading) se encuentre la ciuadad "Córdoba"
  // y cuando en el segundo elemento se encuentre el país España
  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);

  // Si estas condiciones se cumplen (expect), el test esta "ok"
});
