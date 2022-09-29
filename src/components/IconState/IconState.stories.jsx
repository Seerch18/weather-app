import React from "react";
import IconState from "./IconState";
import { action } from "@storybook/addon-actions";

export default {
  title: "IconState",
  component: IconState,
};

export const IconStateExample = () => <IconState state="clear"></IconState>;
