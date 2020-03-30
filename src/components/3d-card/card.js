/** @format */

import React from 'react';
import Tilt from 'react-tilt';

function Card(props) {
	return (
		<Tilt
			className="Tilt"
			options={{ max: 25 }}
			style={{ height: 400, width: 300 }}
		>
			<div className="work-item">
				<div className="work-text">
					<h3>{props.name}</h3>
					<span>EXPLORE</span>
				</div>
				<div className="border-work"></div>
				<img alt="Lorem ipsum" src={props.bg} />
			</div>
		</Tilt>
	);
}

export default Card;
