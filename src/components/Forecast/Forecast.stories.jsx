import React from "react";
import Forecast from "./Forecast";
import { action } from "@storybook/addon-actions";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecastItemList = [
  { weekDay: "Lunes", hour: 18, state: "clear", temperature: 17 },
  { weekDay: "Martes", hour: 5, state: "clouds", temperature: 15 },
  { weekDay: "Miercoles", hour: 1, state: "drizzle", temperature: 8 },
  { weekDay: "Jueves", hour: 13, state: "clear", temperature: 20 },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList}></Forecast>
);
