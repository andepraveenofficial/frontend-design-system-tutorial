import {Button} from "./library/components";
import { Stack } from "./library/stack";
import {Heading, Paragraph} from "./library/typography";

const App = () => {
	return (
		<>
			<Button onClick={() => console.log("Button clicked")} className="bg-red-500">Button</Button>

			<Heading>Heading</Heading>
			<Paragraph>I am Paragraph</Paragraph>
			<Stack>
				<Button>Button</Button>
				<Button>Button</Button>
			</Stack>
			<Stack orientation="vertical">
				<Button>Button</Button>
				<Button>Button</Button>
			</Stack>
		</>
	);
};

export default App;
