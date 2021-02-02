import React, { useState } from 'react';
import './SearchDatePicker.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeoppleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

function SearchDatePicker() {
    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const pushToHistory = () => {
        history.push('/search');
    };
    return (
        <div className="searchDatepicker">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests <PeoppleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={pushToHistory}>Serach Airbnb</Button>
        </div>
    );
}

export default SearchDatePicker;
