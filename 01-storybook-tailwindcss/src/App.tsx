import Button from "./components/Button";

const App = () => {
	return (
		<Button
			variant="primary"
			size="md"
			onClick={() => console.log("Button clicked")}
		>
			Button
		</Button>
	);
};

export default App;
