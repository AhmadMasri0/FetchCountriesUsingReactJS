import {Box} from "@mui/material";
import classes from './control.module.css';
import Search from "./search";
import Filter from "./filter";


export default function Container() {

    return <Box ml={'72px'} mr={'72px'} mt={'50px'} display={'flex'} justifyContent={"space-between"}
                maxWidth={'1296px'} className={classes.box}>
        <Search search={classes.search} icon={classes.icon}/>
        <Filter select={classes.select}/>
    </Box>;
}
