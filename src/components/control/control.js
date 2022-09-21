import {Box} from "@mui/material";
import classes from './control.module.css';
import Search from "./search";
import Filter from "./filter";


export default function Control(props) {

    return <Box sx={{
        marginLeft: '72px',
        marginRight: '72px',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-between',
    }} className={classes.box}>

        <Search search={classes.search} icon={classes.icon}/>
        <Filter select={classes.select}/>

    </Box>;
}
