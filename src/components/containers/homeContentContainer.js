import classes from './containers.module.css';
import {Box} from "@mui/material";
import ListContainer from "../favourites/listContainer";
import Countries from "../countries/countries";

export default function HomeContentContainer() {

    return <Box justifyContent={"space-between"} display={"flex"} ml={'72px'} mr={'72px'} mt={'50px'}
                className={classes['countries-container']}>

        <ListContainer/>
        <Countries/>

    </Box>

}
