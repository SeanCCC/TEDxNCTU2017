import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC'

let propItems = {
  a: 'aaa'
};

@basicHOC(propItems)
class Activities extends Component {
	render() {
    // console.log(this.props)
    // let indent = [];
    // this.props.data.map(
    //   (unit) => {
    //     console.log(unit);
    //     indent.push(
    //       <RecordCard record={unit}/>
    //     );
    //   }
    // );
		return (
			<div className='ActivitiesContainer'>
        Activities
      </div>
		);
	}
}

export default Activities;