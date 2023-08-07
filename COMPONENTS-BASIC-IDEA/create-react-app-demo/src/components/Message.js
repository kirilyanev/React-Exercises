import { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props);

        console.log('constructor');

        this.state = {
            company: 'Softuni'
        };
    }

    componentDidMount() {
        console.log('ComponentDidMount');

        setTimeout(() => {
            this.setState({company: 'Software University'});
        }, 1000);
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    }

    render() {
        console.log('render');
        return <span>{this.props.text} | {this.state.company}</span>;
    }
}

export default Message;