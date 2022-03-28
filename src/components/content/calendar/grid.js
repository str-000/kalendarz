import React from 'react';
import '../../../index.css';

let january=[0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let february=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
let march=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let april=[0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let may=[0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let june=[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let july=[0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let august=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let september=[0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let october=[0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let november=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let december=[0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function setMonthToUse(selectedMonth) {
    switch(selectedMonth) {
        case 1:
            return january;
        case 2:
            return february;
        case 3:
            return march;
        case 4:
            return april;
        case 5:
            return may;
        case 6:
            return june;
        case 7:
            return july;
        case 8:
            return august;
        case 9:
            return september;
        case 10:
            return october;
        case 11:
            return november;
        case 12:
            return december;
        default:
            return january;
    }
}

export default class Grid extends React.Component {
    render() {
        return(
            <div className='grid'>
                {setMonthToUse(this.props.selectedMonth).map((day,index)=>{return day === 0 ? 
                    <div className='grid-element-null' key={index}></div> : 
                        ((index+1)%7 === 0 ? 
                            <div className='grid-element' key={index}><b>{day}</b></div> : <div className='grid-element' key={index}>{day}</div>)})}
            </div>
        );
    }
}



