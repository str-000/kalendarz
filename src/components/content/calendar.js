import React from 'react';
import '../../index.css';

import MonthSelector from './calendar/monthSelector';
import Grid from './calendar/grid';

export default class Calendar extends React.Component {
    render() {
        return(
            <div className='calendar'>
               <MonthSelector/>
               <Grid/>
            </div>
        );
    }
}