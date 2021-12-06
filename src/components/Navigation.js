import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Navigation() {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	const closeSidebar = () => {
		setShowSidebar(false);
	};

	return (
		<>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={showSidebar} closeSidebar={closeSidebar} />
		</>
	);
}

export default Navigation;
