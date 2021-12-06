import React from "react";
import brand from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

function Navbar({ toggleSidebar }) {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<a className="navbar__brand" href="">
					<img src={brand} alt="" />
				</a>
				<ul className="navbar__list">
					<li className="navbar__list-item">
						<a href="">About</a>
					</li>
					<li className="navbar__list-item">
						<a href="">Careers</a>
					</li>
					<li className="navbar__list-item">
						<a href="">Events</a>
					</li>
					<li className="navbar__list-item">
						<a href="">Products</a>
					</li>
					<li className="navbar__list-item">
						<a href="">Support</a>
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
