import { Button } from "./library/components";
import { Input } from "./library/form";
import { Stack } from "./library/stack";
import { Heading, Paragraph } from "./library/typography";

const App = () => {
	return (
		<>
			<Button
				onClick={() => console.log("Button clicked")}
				className="bg-red-500"
			>
				Button
			</Button>
			<hr />

			<Heading>Heading</Heading>
			<hr />

			<Paragraph>I am Paragraph</Paragraph>
			<hr />

			<Stack>
				<Button>Button</Button>
				<Button>Button</Button>
			</Stack>
			<hr />

			<Stack orientation="vertical" className="block">
				<Button>Button</Button>
				<Button>Button</Button>
			</Stack>
			<hr />

			<Input />
			<hr />
		</>
	);
};

export default App;
