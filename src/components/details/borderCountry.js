import {Box} from "@mui/material";
import classes from "./details.module.css";
import {Link} from "react-router-dom";

export default function BorderCountry({name}) {
    return <Box ml={'10px'} width={'110px'} textAlign={"center"} borderRadius={'5px'} alignSelf={"center"}
                pt={'2px'} pb={'2px'} className={classes.btn}
                boxShadow={'0 0 0.175rem 0.09rem rgba(0, 0, 0, .1)'} sx={{'&:hover': {cursor: 'pointer'}}}>
        <Link to={'/reactTraining/'}>
            {name}
        </Link>
    </Box>
}
