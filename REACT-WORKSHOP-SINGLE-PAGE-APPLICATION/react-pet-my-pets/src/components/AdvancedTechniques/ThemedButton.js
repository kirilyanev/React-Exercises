import React from "react";
import Button from "./Button.js";
import ButtonHeader from "./ButtonHeader.js";

import ThemeContext from "./ThemeContex.js";

class ThemedButton extends React.Component {

    componentDidMount() {
        console.log(this.context);
    }

    render() {
        // Without setting contextType
        // return (
        //     <ThemeContext.Consumer>
        //         {values => <Button theme={values.theme} buttonClickHandler={values.onChangeThemeClickHandler} />}
        //     </ThemeContext.Consumer>
        // );

        // With setting contextType (ThemedButton.contextType = ThemeContext);
        // return <Button theme={this.context.theme} buttonClickHandler={this.context.onChangeThemeClickHandler} />;

        return (
            <>
                <ButtonHeader />
                <Button buttonClickHandler={this.context.onChangeThemeClickHandler} />
            </>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;