import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Top from './Top';
import About from './About';
import Activities from './Activities';
import Imformation from './Imformation';
import Lecturer from './Lecturer';
import Team from './Team';
import Navbar from './Navbar';

class Home extends Component {
	render() {
		return (
			<div className='HomeContainer'>
        <Navbar />
        <Top />
        
        <ScrollableAnchor id={'sectionAbout'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'sectionLecturer'}>
          <Lecturer />
        </ScrollableAnchor>
        <ScrollableAnchor id={'sectionActivity'}>
          <Activities />
        </ScrollableAnchor>
        <ScrollableAnchor id={'sectionTeam'}>
          <Team />
        </ScrollableAnchor>
        <Imformation />
      </div>
		);
	}
}

export default Home;