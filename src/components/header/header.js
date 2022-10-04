import classes from './header.module.css'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Header({darkModeHandler, darkMode}) {

    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};

    return <header className={classes.header} style={style}>
        <h1>Where in the World?</h1>
        <div className={classes.mode} onClick={() => {
            darkModeHandler(!darkMode);
            localStorage.setItem('darkMode', !darkMode);
        }}>
            <DarkModeOutlinedIcon sx={{width: '18px', height: '22px'}}/>
            <span style={{fontWeight: 600}}> Dark mode</span>
        </div>
    </header>
}
