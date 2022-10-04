import {Box} from "@mui/material";
import classes from './containers.module.css';
import Search from "../inputs/search";
import Filter from "../inputs/filter";

export default function SearchFilterContainer({searchPlaceholder, searchHandler, filterHandler, darkMode, filterLabel}) {


    return <Box ml={'72px'} mr={'72px'} mt={'50px'} display={'flex'}
                justifyContent={"space-between"} className={classes.box}>

        <Search darkMode={darkMode} searchHandler={searchHandler} placeholder={searchPlaceholder}/>
        <Filter darkMode={darkMode} filterHandler={filterHandler} filterLabel={filterLabel}/>

    </Box>;
}
