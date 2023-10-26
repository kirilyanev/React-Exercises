import ThemeContext from "./ThemeContex.js";

function Button({
    theme,
    buttonClickHandler
}) {
    return (
        <ThemeContext.Consumer>
            {values =>
            <button
                onClick={buttonClickHandler}
                style={{ backgroundColor: values.theme == 'dark' ? 'darkgray' : 'lightgreen' }}
            >
                {values.theme}
            </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;