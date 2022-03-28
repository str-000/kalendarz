import React from 'react';
import '../../../index.css';

import Grid from './grid';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default class MonthSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selectedMonth: 1}
    }

    selectNextMonth=()=>{
        this.state.selectedMonth < 12 && this.setState({selectedMonth: this.state.selectedMonth+1})
        console.log(this.state.selectedMonth)
    }

    selectPrevMonth=()=>{
        this.state.selectedMonth > 1 && this.setState({selectedMonth: this.state.selectedMonth-1})
        console.log(this.state.selectedMonth)
    }

    render() {
        return(
            <div>
                <div className='month-selector'>
                    <div className='month-selector-top-row'>
                        <button onClick={()=>this.selectPrevMonth()}><ArrowLeftIcon sx={{ fontSize: 50, color: this.state.selectedMonth > 1 ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.3)' }} /></button> 
                            <p>
                                {this.state.selectedMonth === 1 && "Styczeń"}
                                {this.state.selectedMonth === 2 && "Luty"}
                                {this.state.selectedMonth === 3 && "Marzec"}
                                {this.state.selectedMonth === 4 && "Kwiecień"}
                                {this.state.selectedMonth === 5 && "Maj"}
                                {this.state.selectedMonth === 6 && "Czerwiec"}
                                {this.state.selectedMonth === 7 && "Lipiec"}
                                {this.state.selectedMonth === 8 && "Sierpień"}
                                {this.state.selectedMonth === 9 && "Wrzesień"}
                                {this.state.selectedMonth === 10 && "Październik"}
                                {this.state.selectedMonth === 11 && "Listopad"}
                                {this.state.selectedMonth === 12 && "Grudzień"}
                            </p> 
                        <button onClick={()=>this.selectNextMonth()}><ArrowRightIcon sx={{ fontSize: 50, color: this.state.selectedMonth === 12 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.7)' }}/></button>
                    </div>

                    <div className='month-selector-bottom-row'>
                        <p>2022</p>
                    </div>
                </div>

                <Grid selectedMonth={this.state.selectedMonth}/>
            </div>
        );
    }
}
