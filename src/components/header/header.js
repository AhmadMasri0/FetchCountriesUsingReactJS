import classes from './header.module.css'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Header() {

    return <header className={classes.header}>
        <h1>Where in the World?</h1>
        <div className={classes.mode}>
            <DarkModeOutlinedIcon/>
           <span> Dark mode</span>
        </div>
    </header>
}
