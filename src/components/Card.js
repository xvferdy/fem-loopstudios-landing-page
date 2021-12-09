import React from "react";

function Card({ id, title, desktopImg, mobileImg }) {
	return (
		<div className="card">
			<picture>
				<source media="(max-width: 999px)" srcSet={mobileImg} />
				<img src={desktopImg} alt="" />
			</picture>

			<p>{title}</p>
		</div>
	);
}

export default Card;
