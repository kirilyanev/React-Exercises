import React from "react";
import Button from "./Button.js";

import ThemeContext from "./ThemeContex.js";

class ThemedButton extends React.Component {

    componentDidMount() {
        console.log(this.context);
    }

    render() {
        return <Button theme={this.context} buttonClickHandler={this.props.onChangeThemeClickHandler} />;
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;