import Button from "./components/Button";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";

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
