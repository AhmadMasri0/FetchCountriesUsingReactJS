import {createContext, useEffect, useState} from "react";


const ThemeContext = createContext({
    isDarkMode: false,
    setMode: () => {},
    componentStyle: {},
    textColor: ''
});


export const ThemeContextProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));
    const [componentStyle, setComponentStyle] = useState();
    const [textColor, setTextColor] = useState('');

    useEffect(() => {
        setComponentStyle(isDarkMode ? {backgroundColor: '#2b3945', color: 'white'} : {});
        setTextColor(isDarkMode ? 'white' : 'black');
        document.body.style.backgroundColor = isDarkMode ? '#202c37' : '#F8F9FAFF';
    }, [isDarkMode]);

    const setModeHandler = () => {
        try {
            localStorage.setItem('darkMode', !isDarkMode);
            setIsDarkMode(!isDarkMode);
            setComponentStyle(!isDarkMode ? {backgroundColor: '#2b3945', color: 'white'} : {});
            setTextColor(isDarkMode ? 'white' : 'black');
        } catch (e) {
            alert(e)
        }
    }

    const themeContextValue = {
        isDarkMode,
        setMode: setModeHandler,
        componentStyle,
        textColor
    }
    return <ThemeContext.Provider value={themeContextValue}>{props.children}</ThemeContext.Provider>
}
export default ThemeContext;
