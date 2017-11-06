import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC'

let propItems = {
  exec: [
    {
      name: 'a1',
      photo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201709101434'
    }
  ]
};

@basicHOC(propItems)
class Team extends Component {
	render() {
		return (
			<div className='TeamContainer'>
        Team
      </div>
		);
	}
}

export default Team;