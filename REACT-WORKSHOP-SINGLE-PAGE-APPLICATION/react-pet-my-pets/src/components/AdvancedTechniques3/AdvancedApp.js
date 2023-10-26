import React, { useReducer, useState } from "react";
import Toolbar from './Toolbar.js';
import ThemeContext from "./ThemeContex.js";

const AdvancedApp = ({
}) => {
    const themeReducer = (state, action) => {
        // return {...state, color: action};
        switch (action.type) {
            case 'TOGGLE_COLOR':
                return {...state, color: state.color == 'dark' ? 'light' : 'dark'};
            case 'CHANGE_FONT':
                return {...state, font: action.payload};
            case 'INCERASE_SIZE':
                return {...state, size: state.size + 2};
            default:
                return state;
        }
    };

    // const [theme, setTheme] = useState({
    //     color: 'dark',
    //     size: 'normal',
    //     font: 'default',
    // });

    const [theme, dispatch] = useReducer(themeReducer, {
            color: 'dark',
            size: 'normal',
            font: 'default',
        });

    return (
        <ThemeContext.Provider value={[theme, dispatch]}>
            <Toolbar />
        </ThemeContext.Provider>
    );
};

export default AdvancedApp;