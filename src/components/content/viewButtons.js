import React from 'react';
import '../../index.css';

import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import TodayIcon from '@mui/icons-material/Today';

export default class ViewButtons extends React.Component {
    render() {
        return(
            <div className='view-buttons'>
                <button className='month-view-button'><CalendarViewMonthIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.7)'}}/></button>
                <button className='week-view-button'><CalendarViewWeekIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.3)'}}/></button>
                <button className='day-view-button'><TodayIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.3)'}}/></button>
            </div>
        );
    }
}