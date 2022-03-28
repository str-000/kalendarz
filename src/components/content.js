import React from 'react';
import '../index.css';

import Header from './content/header'
import ViewButtons from './content/viewButtons'
import SelectedDay from './content/selectedDay';
import Calendar from './content/calendar';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedView: 1}
    }

    toggleMe=(value)=>{
        this.setState({selectedView: value}) 
    }

    render() {
        return(
            <div className='content'>
                <div className='left-panel'>
                    <Header/>
                    <ViewButtons selectedView={this.state.selectedView} toggleMe={this.toggleMe}/>
                    <SelectedDay/>
                </div>

                <div className="right-panel">
                    <Calendar selectedView={this.state.selectedView}/>
                </div>
            </div>
        );
    }
}