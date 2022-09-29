import React, { PureComponent } from "react";
import Weather from "./Weather";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Weather render sunny", async () => {
  // AAA Arrange Act Assert
  const temperature = 10;
  const { findByRole } = render(
    <Weather temperature={temperature} state="clear"></Weather>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const temp = await findByRole("heading");

  expect(temp).toHaveTextContent(temperature.toString());
});
