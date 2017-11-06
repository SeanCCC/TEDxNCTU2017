import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC'

let propItems = {
  date: '2017/12/09 SATURDAY',
  time: '13:00 - 18:00',
  location: '交通大學工程四館 合勤講堂',
  specialThanksArr: [
    {
      photo: '',
      url:''
    }
  ]
};

@basicHOC(propItems)
class Imformation extends Component {
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
			<div className='ImformationContainer'>
        Imformation
      </div>
		);
	}
}

export default Imformation;