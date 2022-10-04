import {Box, Typography} from "@mui/material";
import classes from './favourites.module.css';
import List from "./list";

export default function ListContainer({FavouritesListHandler, addedCountry, darkMode}) {

    const ContainerStyles = {
        boxShadow: ' 0 .125rem .25rem rgba(0, 0, 0, .075)',
        borderRadius: '5px',
        backgroundColor: darkMode ? '#2b3945' : 'white',
        width: '25%', height: '715px', marginRight: '15px',
        color: darkMode ? 'white' : 'black'
    }

    return <Box className={classes['list-container']} sx={ContainerStyles} display={"flex"} flexDirection={"column"}>
        <Typography className={classes.title} variant={"h6"} mt={2} ml={3} mr={3} fontWeight={"bold"}>
            Favourites
        </Typography>
        <List darkMode={darkMode} addedCountry={addedCountry} FavouritesListHandler={FavouritesListHandler}/>
    </Box>
}
