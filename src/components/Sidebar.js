import React from "react";
import { motion } from "framer-motion";

function Sidebar({ isOpen, closeSidebar }) {
	// ul
	const boxVariant = {
		hidden: {
			y: "-100vh",
		},
		visible: {
			y: isOpen ? 0 : "-100vh",
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
			x: "-100vw",
			opacity: 0,
		},
		visible: {
			x: isOpen ? 0 : "-100vw",
			opacity: isOpen ? 1 : 0,
			transition: {
				type: "tween",
			},
		},
	};
	return (
		<>
			{/* sidebar box */}
			<motion.nav
				className="sidebar"
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
						<a href="#top" onClick={closeSidebar}>
							about
						</a>
					</motion.li>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#top" onClick={closeSidebar}>
							careers
						</a>
					</motion.li>

					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#top" onClick={closeSidebar}>
							event
						</a>
					</motion.li>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#top" onClick={closeSidebar}>
							product
						</a>
					</motion.li>
					<motion.li className="sidebar__list__item" variants={listVariant}>
						<a href="#top" onClick={closeSidebar}>
							support
						</a>
					</motion.li>
				</motion.ul>
			</motion.nav>
		</>
	);
}

export default Sidebar;
