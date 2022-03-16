import React from 'react';
import '../index.css';

import Header from './content/header'
import ViewButtons from './content/viewButtons'
import SelectedDay from './content/selectedDay';
import Calendar from './content/calendar';

export default class Content extends React.Component {
    render() {
        return(
            <div className='content'>
                <div className='left-panel'>
                    <Header/>
                    <ViewButtons/>
                    <SelectedDay/>
                </div>

                <div className="right-panel">
                    <Calendar/>
                </div>
            </div>
        );
    }
}