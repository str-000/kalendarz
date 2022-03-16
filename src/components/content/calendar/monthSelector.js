import React from 'react';
import '../../../index.css';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default class MonthSelector extends React.Component {
    render() {
        return(
            <div className='month-selector'>
                <div className='month-selector-top-row'>
                    <button><ArrowLeftIcon sx={{ fontSize: 50, color: 'rgba(0,0,0,0.3)' }} /></button> 
                        <p>STYCZEŃ</p> 
                    <button><ArrowRightIcon sx={{ fontSize: 50, color: 'rgba(0,0,0,0.7)' }}/></button>
                </div>

                <div className='month-selector-bottom-row'>
                    <p>2022</p>
                </div>
            </div>
        );
    }
}