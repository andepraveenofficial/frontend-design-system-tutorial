import Button from "./library/components/Button";
import Heading from "./library/typography/Heading";
import Paragraph from "./library/typography/Paragraph";

const App = () => {
	return (
		<>
			<Button onClick={() => console.log("Button clicked")}>Button</Button>
			<Heading>Heading</Heading>
			<Paragraph>I am Paragraph</Paragraph>
		</>
	);
};

export default App;
