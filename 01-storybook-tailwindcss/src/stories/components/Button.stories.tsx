import { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/Button";
import { ComponentProps } from "react";
import { fn } from "@storybook/test";

// Define the props for the Storybook stories, including custom ones
type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

// Storybook metadata configuration
const meta: Meta<StoryProps> = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    buttonText: {
      control: "text",
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    type: {
      options: ["button", "submit"],
      control: { type: "select" },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

// Define the 'Primary' story
export const Primary: StoryObj<StoryProps> = {
  args: {
    variant: "primary",
    size: "md",
    buttonText: "Button",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Secondary' story
export const Secondary: StoryObj<StoryProps> = {
  args: {
    variant: "secondary",
    size: "md",
    buttonText: "Button",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Danger' story
export const Danger: StoryObj<StoryProps> = {
  args: {
    variant: "danger",
    size: "md",
    buttonText: "Button",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Disabled' story
export const Disabled: StoryObj<StoryProps> = {
  args: {
    variant: "danger",
    size: "md",
    buttonText: "Button",
    disabled: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Full width story
export const FullWidth: StoryObj<StoryProps> = {
  args: {
    variant: "primary",
    size: "md",
    buttonText: "Button",
    fullWidth: true,
  },
  render: ({ buttonText, ...args }) => (
    <div className="w-full">
      <Button {...args}>{buttonText}</Button>
    </div>
  ),
};
