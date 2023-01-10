import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/Portfolio" element={<Home />} />
					<Route path="/Portfolio/projects" element={<Projects />} />
					<Route path="/Portfolio/about-me" element={<AboutMe />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
