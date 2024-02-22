import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./index";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  tags: ["autodocs"],
  title: "Components/Molecules/Navbar",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {},
};
