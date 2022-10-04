import {Box} from "@mui/material";
import classes from "./details.module.css";
import {Link} from "react-router-dom";

export default function BorderCountry({name, cca2, darkMode}) {

    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};

    return <Box ml={'10px'} paddingLeft={'10px'} paddingRight={'10px'} textAlign={"center"} borderRadius={'5px'}
                alignSelf={"center"}
                pt={'2px'} pb={'2px'} className={classes.btn} style={style}
                boxShadow={'0 0 0.175rem 0.09rem rgba(0, 0, 0, .1)'} sx={{'&:hover': {cursor: 'pointer'}}}>
        <Link to={'/details/' + cca2} style={{color: darkMode ? 'white' : 'black'}}>
            {name}
        </Link>
    </Box>
}
