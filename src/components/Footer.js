import React from "react";
import brand from "../assets/images/logo.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer__left">
					<img className="brand" src={brand} alt="" />
					<ul>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Careers</a>
						</li>
						<li>
							<a href="">Events</a>
						</li>
						<li>
							<a href="">Products</a>
						</li>
						<li>
							<a href="">Support</a>
						</li>
					</ul>
				</div>
				<div className="footer__right">
					<ul>
						<li>
							<a href="">
								<img src={instagram} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={pinterest} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={twitter} alt="" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={facebook} alt="" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						© 2021 Loopstudios. All rights reserved.{" "}
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
