import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class IncrementDecrement extends Component {
    constructor(props) {
        super(props);
        this.state = { number: props.start};
    }

    increment = (state) => {
        let i = this.state.number + 1;
        this.setState({number: i});
    };

    decrement = (state) => {
        if(state.number === 0)
        {
            return alert("Cannot be less than zero.");
        }
        this.setState({number: state.number - 1});
    };

    render() {
        return (
            <div className="buttons">
                    <button className="btns" onClick={() => this.increment(this.state)}>Increment</button>
                    <p>{this.state.number}</p>
                    <button className="btns" onClick={() => this.decrement(this.state)}>Decrement</button>
            </div>
        );
    }
}

IncrementDecrement.propTypes = {
    start: PropTypes.number.isRequired,
};

export default IncrementDecrement;
