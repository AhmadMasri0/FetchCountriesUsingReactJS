import ThemeContext from "../../store/theme-context";
import {useContext} from "react";

export default function CountryItem({mt, title, value}) {

    const themeContext = useContext(ThemeContext);

    return <p style={{fontWeight: '600', marginLeft: '5px', marginBottom: '-1px', color: themeContext.textColor, marginTop: mt}}>
        {title}:
        <span style={{fontWeight: '400'}}> {value}</span>
    </p>;
}
