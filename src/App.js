import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import introImg from "./assets/images/desktop/image-interactive.jpg";
import introMobileImg from "./assets/images/mobile/image-interactive.jpg";
import Card from "./components/Card";
import data from "./data";

import "./stylesheets/css/main.css";

function App() {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const animation1 = useAnimation();
	const animation2 = useAnimation();
	useEffect(() => {
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
		console.log("render");
	}, [inView, animation1, animation2]);

	return (
		<div className="loopstudios">
			<div className="container">
				<div className="loopstudios-grid">
					{/* HERO */}
					<section id="top" className="hero">
						{/* NAVBAR */}
						<Navigation />

						<div className="hero-wrapper">
							<div className="hero__title">
								<h1>Immersive experiences that deliver</h1>
							</div>
						</div>
					</section>

					{/* INTRO */}
					<section ref={ref} className="intro">
						<div className="intro-wrapper">
							<picture>
								<source media="(max-width: 700px)" srcSet={introMobileImg} />
								<motion.img src={introImg} alt="vr dude" animate={animation1} />
							</picture>
							<motion.div className="intro__text" animate={animation2}>
								<h2 className="intro__text-title">
									The Leader In Interactive VR
								</h2>
								<p className="intro__text-desc">
									Founded in 2011, Loopstudios has been producing world-class
									virtual reality projects for some of the best companies around
									the globe. Our award-winning creations have transformed
									businesses through digital experiences that bind to their
									brand.
								</p>
							</motion.div>
						</div>
					</section>

					{/* CREATIONS */}
					<section className="creations">
						<div className="creations-wrapper">
							<div className="creations__header">
								<h2 className="creations__header-title">Our creations</h2>
								<button className="creations__header-btn">See All</button>
							</div>
							<section className="creations__cards">
								{data.map((card, i) => (
									<Card key={i} id={i} {...card} />
								))}
							</section>
							<button className="creations__header-btn creations__header-btn--mobile">
								See All
							</button>
						</div>
					</section>
				</div>
			</div>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default App;
