import {Box} from "@mui/material";
import Btn from "../inputs/button";
import classes from "./containers.module.css";

export default function ButtonContainer({name}) {


    return <Box ml={'72px'} mt={'70px'} className={classes.btn}>
            <Btn name={name}/>
    </Box>
}
