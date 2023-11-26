import { Meta, StoryObj } from "@storybook/react";

import CustomBox from "./index";
import theme from "../../../kuma.config";

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
