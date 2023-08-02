import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 11,
            collectionName: 'My books',
        };

        // Hack!!! - if we have to bind this multiple times for the same function, we can do it once in the constructor:
        this.resetCounter = this.resetCounter.bind(this);
        // After this one line of code we can replace rows 39,40.41 with a single row of code on row 42
    }

    decrementCounter(e) {
        // this.setState({count: this.state.count - 1});
        this.setState(prevState => ({count: prevState.count - 1})); 
    }

    incrementCounter(e) {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    resetCounter(e) {
        this.setState({count: 0});
    }

    render() {
        return (
            <div className='counter'>
                <h3>{this.state.collectionName} Counter</h3>
                {/* <button onClick={(e) => this.setState((oldState) => ({count: oldState.count - 1}))}>-</button> */}
                <button onClick={(e) => this.decrementCounter(e)}>-</button>
                <span>{this.state.count}</span>
                {/* <button onClick={(e) => this.setState({count: this.state.count + 1})}>+</button> */}
                <button onClick={this.incrementCounter.bind(this)}>+</button>
                {/* <button onClick={this.resetCounter.bind(this)}>Reset</button> */}
                {/* <button onClick={this.resetCounter.bind(this)}>Reset</button> */}
                {/* <button onClick={this.resetCounter.bind(this)}>Reset</button> */}
                <button onClick={this.resetCounter}>Reset</button>

            </div>
        );
    }
}

export default Counter;