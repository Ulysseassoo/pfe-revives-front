import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const NavbarWrapper = () => {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Outlet />
		</>
	);
};

export default NavbarWrapper;
