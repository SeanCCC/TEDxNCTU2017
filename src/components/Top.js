import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC'

let propItems = {
  a: 'aaa'
};

@basicHOC(propItems)
class Top extends Component {
	render() {
		return (
			<div className='TopContainer'>
        Top
      </div>
		);
	}
}

export default Top;