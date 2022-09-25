import classes from './details.module.css';
import Image from "./image";
import Info from "./info";
import {Box} from "@mui/material";

export default function Details(props) {


    return  <Box display={"flex"} justifyContent={"space-between"} flexWrap={'wrap'} ml={'72px'} mr={'72px'} mt={'60px'}
             className={classes.details}>
            <Image/>
            <Info/>
        </Box>
    ;
}
