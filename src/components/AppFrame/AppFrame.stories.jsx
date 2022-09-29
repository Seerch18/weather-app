import React from "react";
import "typeface-roboto";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est
      temporibus illum enim cum error non! Sequi dolorum ullam quam error
      impedit delectus tempora, nostrum quasi porro accusantium minima eius!
    </AppFrame>
  </Router>
);
