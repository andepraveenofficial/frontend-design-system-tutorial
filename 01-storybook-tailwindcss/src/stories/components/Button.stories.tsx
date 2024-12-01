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
			options: ["primary", "secondary"],
			control: { type: "select" },
		},
		size: {
			options: ["sm", "md", "lg"],
			control: { type: "select" },
		},

		buttonText: {
			control: { type: "text" }, // Ensure buttonText is recognized as a string input
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
		// onClick: () => console.log("Button clicked"), // Provide a default function
	},
	render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Secondary' story
export const Secondary: StoryObj<StoryProps> = {
	args: {
		variant: "secondary",
		size: "md",
		buttonText: "Button",
		// onClick: () => console.log("Button clicked"), // Provide a default function
	},
	render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
