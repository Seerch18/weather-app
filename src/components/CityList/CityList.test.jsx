import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList"; // SUT

const cities = [
  { city: "Córdoba", country: "España", countryCode: "ES" },
  { city: "Málaga", country: "España", countryCode: "ES" },
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Bogotá", country: "Colombia", countryCode: "CO" },
];
test("CityList render", async () => {
  // AAA Arrange Act Assert

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={() => {}}></CityList>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole("button");

  expect(items).toHaveLength(4);
});

test("CityList click on item", async () => {
  // Debemos simular una acción del usuario: click sobre un item
  // Para eso vamos a utilizar una función "mock"
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem}></CityList>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole("button");

  // Ahora, para simular la acción, vamos a utilizar fireEvent
  // fireEvent es parte de la librería testing-library/react

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
