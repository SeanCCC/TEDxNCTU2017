import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC';
import Logo from '../../res/01-4.svg';

let propItems = {
  lecturerArray: [
    {
       name: '劉阿哥122344',
       title: '舉世大好人',
       text: '這是一個好人'
    }
  ]
};

@basicHOC(propItems)
class Lectuter extends Component {
	render() {
    console.log(this.props)
    let indent = [];
    this.props.lecturerArray.map(
      (unit) => {
        indent.push(
          <div>
            <div>{`${unit.title} - ${unit.name}`}</div>
            <div>{`${unit.text}`}</div>
          </div>
        );
      }
    );
		return (
      <div className='LecturerContainer'>
        Lecturer
        <img src={Logo}/>
      </div>
		);
	}
}

export default Lectuter;