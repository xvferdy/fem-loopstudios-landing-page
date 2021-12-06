import React from "react";
import myImg from "../assets/images/desktop/image-deep-earth.jpg";

function Card() {
	return (
		<div className="card">
			<img src={myImg} alt="" />
			<p>Deep Earth</p>
		</div>
	);
}

export default Card;
