import { Component } from 'react';
import './Message.css';

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
            this.setState({ company: 'Software University' });
        }, 1000);
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate');
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount');
    }

    render() {
        // Inline CSS
        // let style = {
        //     backgroundColor: 'pink',
        //     fontSize: 44,
        // };

        // if (true) {
        //     style.textDecoration = 'underline';
        // }


        // Dynamic classes
        let classes = ['default-class'];

        if (true) {
            classes.push('selected-book');
        }


        console.log('render');
        // return <span style={{backgroundColor: 'pink'}}>{this.props.text} | {this.state.company}</span>;
        // return <span style={style}>{this.props.text} | {this.state.company}</span>;
        // return <span className={classes.join(' ')}>{this.props.text} | {this.state.company}</span>;
        return (
            <div className='footer-container'>
                <span className="footer-message">{this.props.text} | {this.state.company}</span>;
            </div>
        );
    }
}

export default Message;