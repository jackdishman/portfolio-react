import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Default = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Default;
