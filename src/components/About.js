import React, { Component } from 'react';
import basicHOC from '../sections/basicHOC';
import './About.scss';
let propItems = {
  aboutText: ' 臣亮言：先帝創業未半，而中道崩殂。今天下三分，益州疲弊，此誠危急存亡之秋也。然侍衛之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。宮中府中，俱為一體，陟罰臧否'
};

@basicHOC(propItems)
class About extends Component {
	render() {
    // let w=$(window).width();
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
			<div className='AboutContainer'>
        <div className='upSkew'/>
        <div className='downSkew'/>
        <div className='contentContainer'>
          About
        </div>
      </div>
		);
	}
}

export default About;