import {Box} from "@mui/material";
import Btn from "../inputs/button";
import {Link} from "react-router-dom";
import classes from "./containers.module.css";

export default function ButtonContainer({name, darkMode}) {


    return <Box ml={'72px'} mt={'70px'} className={classes.btn}>
        <Link to={'/'} style={{textDecoration: 'none'}}>
            <Btn darkMode={darkMode} name={name}/>
        </Link>
    </Box>
}
