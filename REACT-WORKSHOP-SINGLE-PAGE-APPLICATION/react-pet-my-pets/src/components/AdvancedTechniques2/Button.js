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
                style={{ backgroundColor: values[0] == 'dark' ? 'darkgray' : 'lightgreen' }}
            >
                {values[0]}
            </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;