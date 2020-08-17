import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {currTime: new Date()};
        this.ref = React.createRef();
    }
    
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            currTime: new Date()
        });
    }

    render () {
        return (
            <div id="dateTime">{this.state.currTime.toLocaleTimeString()} <span>EST</span></div>
        );
    }       
}

export default Clock;