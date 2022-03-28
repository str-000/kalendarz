import React from 'react';
import '../../index.css';

import MonthSelector from './calendar/monthSelector';

export default class Calendar extends React.Component {
    render() {
        return(
            <div className='calendar'>
               <MonthSelector/>
            </div>
        );
    }
}