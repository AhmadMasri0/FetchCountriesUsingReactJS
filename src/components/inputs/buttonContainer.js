import {Box} from "@mui/material";
import Btn from "./button";
import {Link} from "react-router-dom";
import classes from "./control.module.css";

export default function ButtonContainer() {

    return <Box ml={'72px'} mt={'70px'} className={classes.btn}>
        <Link to={'/reactTraining/'} style={{textDecoration: 'none'}}>
            <Btn name="Back"/>
        </Link>
    </Box>
}
