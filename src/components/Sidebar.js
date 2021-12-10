import React from "react";
import { motion } from "framer-motion";

function Sidebar({ isOpen, closeSidebar }) {
	// const styles = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
	const styles = isOpen ? "sidebar" : "sidebar"; //TODO: pindahkan ke classname

	// ul
	const boxVariant = {
		hidden: {
			y: "-100vh",
		},
		visible: {
			y: isOpen ? 0 : "-100vh", // sama kyk hidden
			transition: {
				duration: 0.9,
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	// li
	const listVariant = {
		hidden: {
			// x: "-100vw",

			opacity: 0,
		},
		visible: {
			// x: isOpen ? 0 : "-100vw", // sama kyk hidden
			opacity: isOpen ? 1 : 0,
			transition: {
				type: "tween",
			},
		},
	};
	return (
		<>
			{/* {isOpen ? <div className="backdrop" onClick={closeSidebar}></div> : null} */}
			{/* sidebar box */}
			<motion.nav
				className={styles}
				initial={{ y: "-100vh" }}
				animate={{ y: isOpen ? 0 : "-100vh" }}
				transition={{
					duration: 1,
				}}
			>
				<motion.ul
					className="sidebar__list"
					variants={boxVariant}
					initial="hidden"
					animate="visible"
				>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#" onClick={closeSidebar}>
							about
						</a>
					</motion.li>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#" onClick={closeSidebar}>
							careers
						</a>
					</motion.li>

					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#" onClick={closeSidebar}>
							event
						</a>
					</motion.li>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#" onClick={closeSidebar}>
							product
						</a>
					</motion.li>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#" onClick={closeSidebar}>
							support
						</a>
					</motion.li>
				</motion.ul>
			</motion.nav>
		</>
	);
}

export default Sidebar;
