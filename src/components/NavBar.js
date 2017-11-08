import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC';

let propItems = {
  linkArray: [
    {
      text: 'ABOUT',
      id: '#sectionAbout'
    },
    {
      text: 'LECTURER',
      id: '#sectionLecturer'
    },
    {
      text: 'ACTIVITY',
      id: '#sectionActivity'
    },
    {
      text: 'TEAM',
      id: '#sectionTeam'
    }
  ]
};

@basicHOC(propItems)
class Navbar extends Component {
	render() {
    console.log(this.props)
    let indent = [];
    this.props.linkArray.map(
      (unit) => {
        indent.push(
          <div>
            <a href={unit.id}>{`${unit.text}`}</a>
          </div>
        );
      }
    );
		return (
      <div className='NavbarContainer'>
        {indent}
      </div>
		);
	}
}

export default Navbar;