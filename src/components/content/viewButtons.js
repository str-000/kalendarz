import React from 'react';
import '../../index.css';

import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import TodayIcon from '@mui/icons-material/Today';

export default class ViewButtons extends React.Component {
    render() {
        return(
            <div className='view-buttons'>
                {this.props.selectedView === 1 ? (<button onClick={()=>this.props.toggleMe(1)} className='month-view-button'><CalendarViewMonthIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.7)'}}/></button>) : 
                    (<button onClick={()=>this.props.toggleMe(1)} className='month-view-button'><CalendarViewMonthIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.3)'}}/></button>)}

                {this.props.selectedView === 2 ? (<button onClick={()=>this.props.toggleMe(2)} className='week-view-button'><CalendarViewWeekIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.7)'}}/></button>) : 
                    (<button onClick={()=>this.props.toggleMe(2)} className='week-view-button'><CalendarViewWeekIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.3)'}}/></button>)}
                    
                {this.props.selectedView === 3 ? (<button onClick={()=>this.props.toggleMe(3)} className='day-view-button'><TodayIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.7)'}}/></button>) : 
                    (<button onClick={()=>this.props.toggleMe(3)} className='day-view-button'><TodayIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.3)'}}/></button>)}
            </div>
        );
    }
}