import React, { Component } from "react";
import PropTypes from "prop-types";

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
            <div>
                {this.state.number}{" "}
                <button onClick={() => this.increment(this.state)}>Increment</button>
                <button onClick={() => this.decrement(this.state)}>Decrement</button>
            </div>
        );
    }
}

IncrementDecrement.propTypes = {
    start: PropTypes.number.isRequired,
};

export default IncrementDecrement;
