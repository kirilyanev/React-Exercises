import ThemedButton from "./ThemedButton.js";

function Toolbar(props) {
    return (
        <div>
            <ThemedButton onChangeThemeClickHandler={props.onChangeThemeClickHandler} />
        </div>
    );
}

export default Toolbar;