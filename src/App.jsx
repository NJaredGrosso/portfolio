import { BrowserRouter, Routes } from "react-router-dom";
import "./Styles/App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes></Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
