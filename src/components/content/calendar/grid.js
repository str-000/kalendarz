import React from 'react';
import '../../../index.css';
import { january, february, march, april, may, june, july, august, september, october, november, december } from './months';

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
                    <div key={index} className='grid-element-null'></div> : 
                        ((index+1)%7 === 0 ? 
                            <div id={index} className='grid-element' key={index}><b>{day}</b></div> : <div id={index} className='grid-element' key={index}>{day}</div>)
                        }
                    )
                }
            </div>
        );
    }
}



