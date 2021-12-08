import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import introImg from "./assets/images/desktop/image-interactive.jpg";
import introMobileImg from "./assets/images/mobile/image-interactive.jpg";

import "./stylesheets/css/main.css";
import Card from "./components/Card";
import data from "./data";

function App() {
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
				<div className="intro">
					<div className="intro-wrapper">
						<picture>
							<source media="(max-width: 700px)" srcset={introMobileImg} />
							<img src={introImg} alt="" />
						</picture>
						<div className="intro__text">
							<h2 className="intro__text-title">
								The Leader In Interactive VR
							</h2>
							<p className="intro__text-desc">
								Founded in 2011, Loopstudios has been producing world-class
								virtual reality projects for some of the best companies around
								the globe. Our award-winning creations have transformed
								businesses through digital experiences that bind to their brand.
							</p>
						</div>
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
							{data.map((card) => (
								<Card {...card} />
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
