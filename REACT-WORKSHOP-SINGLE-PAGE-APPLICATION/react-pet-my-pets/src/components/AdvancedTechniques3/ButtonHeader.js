import { useContext } from "react";
import ThemeContext from "./ThemeContex.js";

const ButtonHeader = ({

}) => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <header style={{color: theme.color == 'dark' ? 'darkgray' : 'lightpink'}}>
            <h1>Some Cool Title Here</h1>
            <p>Lorem ipsum</p>
        </header>
    );
};

export default ButtonHeader;