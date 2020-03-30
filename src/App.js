/** @format */

import React from 'react';
import './assets/main.scss';
import Card from '../src/components/3d-card/card';
import Hero from '../src/hero/hero';

class App extends React.Component {
	render() {
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
			</div>
		);
	}
}

export default App;
