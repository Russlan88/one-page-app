/** @format */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './assets/main.scss';
import Card from '../src/components/3d-card/card';
import Hero from '../src/components/hero/hero';
import Footer from '../src/components/footer/footer';
import { TweenMax, Power1 } from 'gsap'

const Layout = ({ children, ...props }) => {
	const { headerStyle, headerLayout } = props;
	const cursorEnter = () => {
		TweenMax.to('.cursor', .3, {
			scale: 2.5,
			background: 'rgba(0, 28, 67, 0.05)',
			border: '0px solid rgba(0,0,0,0.0)',
			ease: Power1.easeOut
		})
	}

	const cursorLeave = () => {
		TweenMax.to('.cursor', .3, {
			scale: 1,
			background: 'transparent',
			border: '1.5px solid rgba(0, 28, 67, 0.5)',
			ease: Power1.easeOut,
		})
	}

	const bigCursorIn = () => {
		TweenMax.to('.cursor', .3, {
			scale: 4,
			ease: "Power1.easeOut"
		})
	}

	const bigCursorOut = () => {
		TweenMax.to('.cursor', .3, {
			scale: 1,
			ease: "Power1.easeOut"
		})
	}

	const noCursorIn = () => {
		TweenMax.to('.cursor', .3, {
			scale: 0,
			ease: "Power1.easeOut"
		})
	}

	const noCursorOut = () => {
		TweenMax.to('.cursor', .3, {
			scale: 1,
			ease: "Power1.easeOut"
		})
	}

	useEffect(() => {
		const MenuToggles = document.querySelectorAll('.menu-toggle')
		const cursor = document.querySelector('.cursor');
		const anchors = document.querySelectorAll('a');
		const creativeCursors = document.querySelectorAll('.creative-cursor');
		const bigCursors = document.querySelectorAll('.big-cursor');
		const noCursors = document.querySelectorAll('.no-cursor');

		window.addEventListener("mousemove", function (e) {
			var t = e.clientX + "px",
				a = e.clientY + "px";
			TweenMax.to(cursor, .3, {
				left: t,
				top: a,
				ease: Power1.easeOut
			})
		});
		MenuToggles.forEach(MenuToggle => {
			MenuToggle.addEventListener("mouseenter", cursorEnter);
			MenuToggle.addEventListener("mouseleave", cursorLeave);
		});

		anchors.forEach(anchor => {
			anchor.addEventListener("mouseenter", cursorEnter);
			anchor.addEventListener("mouseleave", cursorLeave);
		});

		creativeCursors.forEach(creativeCursor => {
			creativeCursor.addEventListener("mouseenter", cursorEnter);
			creativeCursor.addEventListener("mouseleave", cursorLeave);
		});

		bigCursors.forEach(bigCursor => {
			bigCursor.addEventListener("mouseenter", cursorEnter);
			bigCursor.addEventListener("mouseleave", cursorLeave);

			bigCursor.addEventListener("mouseenter", bigCursorIn);
			bigCursor.addEventListener("mouseleave", bigCursorOut);
		})

		noCursors.forEach(noCursor => {
			noCursor.addEventListener("mouseenter", noCursorIn);
			noCursor.addEventListener("mouseleave", noCursorOut);
		});
	})
	return (
		<div className="App">

			<Hero />
			<div className="grid-container">
				<Card
					name="LA PRIMERA"
					bg="http://esensifiksi.com/tf/halvor/dark/assets/img/work/1.jpg"
				/>
				<Card
					name="LA SECONDERA"
					bg="http://esensifiksi.com/tf/halvor/dark/assets/img/work/5.jpg"
				/>
				<Card
					name="LA TERZERA"
					bg="http://esensifiksi.com/tf/halvor/dark/assets/img/work/2.jpg"
				/>
			</div>

			<Footer />
		</div>
	);
}
Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout;
