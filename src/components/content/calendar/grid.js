import React from 'react';
import '../../../index.css';

let january=[0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

export default class Grid extends React.Component {
    render() {
        return(
            <div className='grid'>
                {january.map((day,index)=>{return day === 0 ? 
                    <div className='grid-element-null' key={index}></div> : 
                        ((index+1)%7 === 0 ? 
                            <div className='grid-element' key={index}><b>{day}</b></div> : <div className='grid-element' key={index}>{day}</div>)})}
            </div>
        );
    }
}
