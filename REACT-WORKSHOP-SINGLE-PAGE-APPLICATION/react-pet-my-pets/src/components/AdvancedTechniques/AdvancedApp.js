import React from "react";
import Toolbar from './Toolbar.js';
import ThemeContext from "./ThemeContex.js";

class AdvancedApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTheme: 'dark'
        };
    }

    onChangeThemeClickHandler() {
        // this.setState(oldState => oldState.currentTheme == 'dark' ? {currentTheme: 'light'} : {currentTheme: 'dark'});
        this.setState(oldState => ({ currentTheme: oldState.currentTheme == 'dark' ? 'light' : 'dark' }));
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.currentTheme}>
                <Toolbar
                    onChangeThemeClickHandler={this.onChangeThemeClickHandler.bind(this)}
                />
            </ThemeContext.Provider>
        );
    }
}

export default AdvancedApp;