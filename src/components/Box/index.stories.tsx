import { Meta, StoryObj } from "@storybook/react";

import theme from "../../../kuma.config";

import CustomBox from "./index";

const meta: Meta<typeof CustomBox> = {
  component: CustomBox,
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

export const Primary: StoryObj<typeof CustomBox> = {
  args: {
    color: "#959595",
    bg: theme.colors["colors.blue"],
    children: "Hello world",
  },
};
