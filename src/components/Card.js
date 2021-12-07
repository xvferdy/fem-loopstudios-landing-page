import React from "react";

function Card({ title, desktopImg, mobileImg }) {
	return (
		<div className="card">
			<picture>
				<source media="(max-width: 999px)" srcset={mobileImg} />
				<img src={desktopImg} alt="" />
			</picture>

			<p>{title}</p>
		</div>
	);
}

export default Card;
