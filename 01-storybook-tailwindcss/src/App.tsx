import Button from "./components/Button";
import Heading from "./components/Heading";

const App = () => {
	return (
		<>
			<Button
				onClick={() => console.log("Button clicked")}
			>
				Button
			</Button>
			<Heading>Heading</Heading>
		</>
	);
};

export default App;
