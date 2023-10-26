import React, { useContext } from "react";
import Button from "./Button.js";
import ButtonHeader from "./ButtonHeader.js";

import ThemeContext from "./ThemeContex.js";

const ThemedButton = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const onChangeThemeClickHandler = () => {
        setTheme(oldState => oldState == 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <ButtonHeader />
            <Button buttonClickHandler={onChangeThemeClickHandler} />
        </>
    );
};

export default ThemedButton;