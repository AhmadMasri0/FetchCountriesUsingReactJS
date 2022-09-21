import {Box} from "@mui/material";
import Back from "./back";
import {Link} from "react-router-dom";
import classes from "./control.module.css";

export default function DetailsControl() {

    return <Box sx={{
        marginLeft: '72px',
        marginRight: '72px',
        marginTop: '70px',
        display: 'flex',
        justifyContent: 'space-between',
    }} className={classes.back}>
        <Link to={'/reactTraining/'} style={{textDecoration: 'none'}}>
            <Back/>
        </Link>
    </Box>
}
