import React from "react";
import Navigation from "../components/Navigation";

function Layout({ children }) {
	return (
		<>
			<Navigation />
			<div className="content">{children}</div>
		</>
	);
}

export default Layout;
