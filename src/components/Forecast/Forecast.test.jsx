import React from "react";
import Forecast from "./Forecast";
import { render } from "@testing-library/react";

const forecastItemList = [
  { weekDay: "Lunes", hour: 18, state: "clear", temperature: 17 },
  { weekDay: "Martes", hour: 5, state: "clouds", temperature: 15 },
  { weekDay: "Miercoles", hour: 1, state: "drizzle", temperature: 8 },
  { weekDay: "Jueves", hour: 13, state: "clear", temperature: 20 },
];

test("Forcast render", async () => {
  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList}></Forecast>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const forecastItems = await findAllByTestId("forecast-item-container");

  expect(forecastItems).toHaveLength(4);
});
