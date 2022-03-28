import React from 'react';
import '../../index.css';

import MonthSelector from './calendar/monthSelector';

export default class Calendar extends React.Component {

    render() {
        return(
            <div className='calendar'>
               {this.props.selectedView === 1 && <MonthSelector selectedView={this.props.selectedView}/>}
               {this.props.selectedView === 2 && <MonthSelector selectedView={this.props.selectedView}/>}
               {this.props.selectedView === 3 && <MonthSelector selectedView={this.props.selectedView}/>}
            </div>
        );
    }
}