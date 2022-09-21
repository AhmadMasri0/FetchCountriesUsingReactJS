import classes from './header.module.css'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function Header(props) {


    return <div className={classes.header}>
        <h1 className={classes.title}>Where in the World?</h1>
        <p className={classes.mode}>
            <DarkModeOutlinedIcon/>
           <span> Dark mode</span>
        </p>
    </div>
}
