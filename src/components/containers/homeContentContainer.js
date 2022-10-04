import classes from './containers.module.css';
import {Box} from "@mui/material";
import ListContainer from "../favourites/listContainer";
import Countries from "../countries/countries";
import {useState} from "react";

export default function HomeContentContainer({countries, FavouritesListHandler, favourites, darkMode}) {


    const [addedCountry, setAddedCountry] = useState();

    return <Box justifyContent={"space-between"} display={"flex"}
                ml={'72px'} mr={'72px'} mt={'50px'}
                className={classes['countries-container']}>

        <ListContainer darkMode={darkMode} addedCountry={addedCountry} FavouritesListHandler={FavouritesListHandler}/>
        <Countries darkMode={darkMode} favourites={favourites} countries={countries} addCountry={setAddedCountry}/>

    </Box>

}
