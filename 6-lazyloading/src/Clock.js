import React from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

var currTime;

class Clock extends React.Component {
    constructor(props) {
        this.currTime = new Date()
    }

    render () {
        return (
            <div class="dateTime">{currTime.date.toLocaleTimeString()}</div>
        );
    }       
}