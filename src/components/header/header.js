import classes from './header.module.css'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {useContext} from "react";
import ThemeContext from "../../store/theme-context";

export default function Header() {

    const themeContext = useContext(ThemeContext);

    return <header className={classes.header} style={themeContext.componentStyle}>
        <h1>Where in the World?</h1>
        <div className={classes.mode} onClick={themeContext.setMode}>
            <DarkModeOutlinedIcon sx={{width: '18px', height: '22px'}}/>
            <span style={{fontWeight: 600}}> Dark mode</span>
        </div>
    </header>
}
