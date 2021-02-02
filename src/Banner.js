import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import SearchDatePicker from './SearchDatePicker';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    const isSearchEnable = () => {
        setShowSearch(!showSearch);
    };
    const pushToHistory = () => {
        history.push('/search');
    };
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <SearchDatePicker />}
                <Button
                    onClick={isSearchEnable}
                    className="banner__searchButton"
                    variant="outlined"
                >
                    {showSearch ? 'Hide' : 'Search Dates'}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and Stretch your imagination</h1>
                <h5>
                    Plan a different kind of gataway to uncover the hidden gems
                    near you!!
                </h5>
                <Button onClick={pushToHistory} variant="outlined">
                    Explore Nearby
                </Button>
            </div>
        </div>
    );
}

export default Banner;
