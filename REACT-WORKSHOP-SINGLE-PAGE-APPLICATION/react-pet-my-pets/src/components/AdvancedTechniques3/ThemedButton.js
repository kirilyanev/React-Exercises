import React, { useContext } from "react";
import Button from "./Button.js";
import ButtonHeader from "./ButtonHeader.js";

import ThemeContext from "./ThemeContex.js";

const ThemedButton = () => {
    const [theme, dispatch] = useContext(ThemeContext);

    const onChangeThemeClickHandler = () => {
        // dispatch(theme.color == 'dark' ? 'light' : 'dark');
        dispatch({type: 'TOGGLE_COLOR'});
    };

    return (
        <>
            <ButtonHeader />
            <Button buttonClickHandler={onChangeThemeClickHandler} />
        </>
    );
};

export default ThemedButton;