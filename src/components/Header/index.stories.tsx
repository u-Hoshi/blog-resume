import { Meta, StoryObj } from "@storybook/react";

import Header from "./index";
import theme from "../../../kuma.config";

const meta: Meta<typeof Header> = {
  component: Header,
  args: {
    color: "#959595",
    bg: theme.colors["colors.blue"],
    children: "Hello world",
  },
  argTypes: {
    bg: {
      control: "color",
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Header> = {
  args: {
    color: "#959595",
    bg: theme.colors["colors.blue"],
    children: "Hello world",
  },
};
