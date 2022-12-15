import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
