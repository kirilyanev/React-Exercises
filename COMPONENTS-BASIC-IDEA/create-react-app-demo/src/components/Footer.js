import { Component } from 'react';
import refreshComponent from '../hoc/refreshComponent.js';
import Message from './Message.js';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.refreshCount);

        return (this.props.refreshCount == 0) ? <Message text="All rights reserved &copy;" /> : null;
    }
}

// This is hoc
const enhancedFooter = refreshComponent(Footer);

export default enhancedFooter;