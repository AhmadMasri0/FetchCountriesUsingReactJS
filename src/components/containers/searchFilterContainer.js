import {Box} from "@mui/material";
import classes from './containers.module.css';
import Search from "../inputs/search";
import Filter from "../inputs/filter";

export default function SearchFilterContainer({searchPlaceholder, filterLabel}) {


    return <Box ml={'72px'} mr={'72px'} mt={'50px'} display={'flex'} justifyContent={"space-between"}
                className={classes.box}>
        <Search placeholder={searchPlaceholder}/>
        <Filter filterLabel={filterLabel}/>

    </Box>;
}
