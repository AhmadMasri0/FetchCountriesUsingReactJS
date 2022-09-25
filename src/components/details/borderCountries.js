import {Box, InputLabel} from "@mui/material";
import classes from "./details.module.css";
import {Link} from "react-router-dom";


export default function BorderCountries({labelStyle}) {

    return <Box display={"flex"} flexWrap={"wrap"}>
        <InputLabel sx={labelStyle}>
            Border countries:
        </InputLabel>
        <Box display={"flex"}>
            <Box ml={'10px'} width={'110px'} textAlign={"center"} borderRadius={'5px'} alignSelf={"center"}
                 pt={'2px'} pb={'2px'} className={classes.btn}
                 boxShadow={'0 0 0.175rem 0.09rem rgba(0, 0, 0, .1)'} sx={{'&:hover': {cursor: 'pointer'}}}>
                <Link to={'/'}>
                    France
                </Link>
            </Box>
            <Box ml={'10px'} width={'110px'} textAlign={"center"} borderRadius={'5px'} alignSelf={"center"}
                 pt={'2px'} pb={'2px'} className={classes.btn}

                 boxShadow={'0 0 0.175rem 0.09rem rgba(0, 0, 0, .1)'} sx={{'&:hover': {cursor: 'pointer'}}}>
                <Link to={'/'}>
                    Germany
                </Link>
            </Box>
            <Box ml={'10px'} width={'110px'} textAlign={"center"} borderRadius={'5px'} alignSelf={"center"}
                 pt={'2px'} pb={'2px'} className={classes.btn}
                 boxShadow={'0 0 0.175rem 0.09rem rgba(0, 0, 0, .1)'} sx={{'&:hover': {cursor: 'pointer'}}}>
                <Link to={'/'}>
                    Netherlands
                </Link>
            </Box>
        </Box>
    </Box>
}
