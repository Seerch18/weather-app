import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Córdoba", country: "España" },
  { city: "Málaga", country: "España" },
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogotá", country: "Colombia" },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click en city")}></CityList>
);
