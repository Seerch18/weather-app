import React from "react";
import ForecastItem from "./ForecastItem";
import { action } from "@storybook/addon-actions";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const ForecastItemExample = () => (
  <ForecastItem
    weekDay="Lunes"
    hour={10}
    state="clear"
    temperature={20}
  ></ForecastItem>
);
