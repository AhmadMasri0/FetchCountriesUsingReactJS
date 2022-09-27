import classes from './details.module.css';
import Image from "./image";
import Info from "./info";
import {Box} from "@mui/material";

export default function Details() {


    return  <Box display={"flex"} justifyContent={"space-between"} flexWrap={'wrap'} ml={'72px'} mr={'72px'} mt={'60px'}
             maxWidth={'1296px'} className={classes.details}>
            <Image/>
            <Info/>
        </Box>
    ;
}
