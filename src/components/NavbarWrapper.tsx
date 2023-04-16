import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavbarWrapper = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default NavbarWrapper;
