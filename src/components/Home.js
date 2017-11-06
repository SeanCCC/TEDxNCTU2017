import React, { Component } from 'react';
import Top from './Top';
import About from './About';
import Activities from './Activities';
import Imformation from './Imformation';
import Lecturer from './Lecturer';
import Team from './Team';

class Home extends Component {
	render() {
		return (
			<div className='HomeContainer'>
        <Top />
        <About />
        <Lecturer />
        <Activities />
        <Team />
        <Imformation />
      </div>
		);
	}
}

export default Home;