import React from "react";

function Sidebar({ isOpen, closeSidebar }) {
	console.log(isOpen);
	const styles = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
	return (
		<>
			{isOpen ? <div className="backdrop" onClick={closeSidebar}></div> : null}
			<nav className={styles}>
				<ul className="sidebar__list">
					<li className="sidebar__list__item">
						<a href="#" onClick={closeSidebar}>
							about
						</a>
					</li>
					<li className="sidebar__list__item">
						<a href="#" onClick={closeSidebar}>
							careers
						</a>
					</li>

					<li className="sidebar__list__item">
						<a href="#" onClick={closeSidebar}>
							event
						</a>
					</li>
					<li className="sidebar__list__item">
						<a href="#" onClick={closeSidebar}>
							product
						</a>
					</li>
					<li className="sidebar__list__item">
						<a href="#" onClick={closeSidebar}>
							support
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
