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
					<a href="#top">
						<img className="brand" src={brand} alt="loopstudios's logo" />
					</a>

					<ul>
						<li>
							<a className="link" href="#top">
								About
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								Careers
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								Events
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								Products
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								Support
							</a>
						</li>
					</ul>
				</div>
				<div className="footer__right">
					<ul>
						<li>
							<a className="link" href="#top">
								<img src={instagram} alt="Instgram" />
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								<img src={pinterest} alt="Pinterest" />
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								<img src={twitter} alt="Twitter" />
							</a>
						</li>
						<li>
							<a className="link" href="#top">
								<img src={facebook} alt="Facebook" />
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
