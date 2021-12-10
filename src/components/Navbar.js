import React from "react";

import brand from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Navbar({ toggleSidebar }) {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<a className="navbar__brand" href="#top">
					<img src={brand} alt="loopstudios's logo" />
				</a>
				<ul className="navbar__list">
					<li className="navbar__list-item">
						<a className="link" href="#top">
							About
						</a>
					</li>
					<li className="navbar__list-item">
						<a className="link" href="#top">
							Careers
						</a>
					</li>
					<li className="navbar__list-item">
						<a className="link" href="#top">
							Events
						</a>
					</li>
					<li className="navbar__list-item">
						<a className="link" href="#top">
							Products
						</a>
					</li>
					<li className="navbar__list-item">
						<a className="link" href="#top">
							Support
						</a>
					</li>
				</ul>
				<div className="navbar__button" onClick={toggleSidebar}>
					<img src={hamburger} alt="" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
