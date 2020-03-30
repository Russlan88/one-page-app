/** @format */

import React from 'react';

const Hero = () => {
	return (
		<header>
			<div className="container-fluid">
				<div className="menu-burger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			{/* <ul className="nav">
					<li>Home</li>
					<li>Blog</li>
					<li>Gallery</li>
					<li>About us</li>
					<li>Contact us</li>
				</ul> */}
			<div className="scrollDown">
				<svg class="arrows">
					<path class="a1" d="M0 0 L30 32 L60 0"></path>
					<path class="a2" d="M0 20 L30 52 L60 20"></path>
					<path class="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>
			</div>
		</header>
	);
};

export default Hero;
