import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";

const Default = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Analytics />
		</>
	);
};

export default Default;
