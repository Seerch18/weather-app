import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import { action } from "@storybook/addon-actions";

export default {
  title: "WelcomeScreen",
  component: WelcomeScreen,
};

export const WelcomeScreenExample = () => (
  <WelcomeScreen>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam
    quod aliquam, atque, sequi labore vitae facilis quisquam distinctio saepe,
    quis error? Asperiores a non quidem sequi dolores provident labore.
  </WelcomeScreen>
);
