import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import introImg from "./assets/images/desktop/image-interactive.jpg";
import introMobileImg from "./assets/images/mobile/image-interactive.jpg";
import { motion, useAnimation } from "framer-motion";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./stylesheets/css/main.css";
import Card from "./components/Card";
import data from "./data";

function App() {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const animation1 = useAnimation();
	const animation2 = useAnimation();

	useEffect(() => {
		console.log("useEffect render, inView=", inView);
		if (inView) {
			animation1.start({
				x: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1,
					bounce: 0.3,
					delay: 0.6,
				},
			});
			animation2.start({
				x: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1,
					bounce: 0.3,
					delay: 0.6,
				},
			});
		}
		if (!inView) {
			animation1.start({
				x: "-25%",
				opacity: 1,
			});
			animation2.start({
				x: "25%",
				opacity: 1,
			});
		}
	}, [inView]);

	return (
		<div className="loopstudios">
			<div className="loopstudios-grid">
				{/* HERO */}
				<div id="top" className="hero">
					{/* NAVBAR */}
					<Navigation />
					<div className="hero-wrapper">
						<div className="hero__title">
							<h1>Immersive experiences that deliver</h1>
						</div>
					</div>
				</div>
				{/* INTRO */}
				<div ref={ref} className="intro">
					<div className="intro-wrapper">
						<picture>
							<source media="(max-width: 700px)" srcSet={introMobileImg} />
							<motion.img //TODO: refactor / khusus untuk scroll anim pakai AOS
								src={introImg}
								alt="desk"
								// initial={{ y: -900, opacity: 1 }}
								// animate={{
								// 	x: 0,
								// 	opacity: 1,
								// }}
								// transition={{
								// 	duration: 2,
								// 	type: "tween",
								// }}
								animate={animation1}
							/>
						</picture>
						<motion.div //TODO: refactor / khusus untuk scroll anim pakai AOS
							className="intro__text"
							// initial={{ x: 100, opacity: 0 }}
							// animate={{
							// 	x: 0,
							// 	opacity: 1,
							// }}
							// transition={{
							// 	duration: 2,
							// 	type: "tween",
							// }}
							animate={animation2}
						>
							<h2 className="intro__text-title">
								The Leader In Interactive VR
							</h2>
							<p className="intro__text-desc">
								Founded in 2011, Loopstudios has been producing world-class
								virtual reality projects for some of the best companies around
								the globe. Our award-winning creations have transformed
								businesses through digital experiences that bind to their brand.
							</p>
						</motion.div>
					</div>
				</div>

				{/* CREATIONS */}
				<div className="creations">
					<div className="creations-wrapper">
						<div className="creations__header">
							<h2 className="creations__header-title">Our creations</h2>
							<button className="creations__header-btn">See All</button>
						</div>
						<div className="creations__cards">
							{data.map((card, i) => (
								<Card key={i} id={i} {...card} />
							))}
						</div>
						<button className="creations__header-btn creations__header-btn--mobile">
							See All
						</button>
					</div>
				</div>
			</div>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default App;
