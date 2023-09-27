import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";

export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="" element={<Default />}>
					<Route index element={<Home />}></Route>
					<Route path="dev" element={<Work />} />
					<Route path="education" element={<Education />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}
