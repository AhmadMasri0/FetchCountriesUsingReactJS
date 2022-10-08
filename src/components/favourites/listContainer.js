import {Box, Typography} from "@mui/material";
import classes from './favourites.module.css';
import List from "./list";
import {useContext} from "react";
import ThemeContext from "../../store/theme-context";

export default function ListContainer() {

    const themeContext = useContext(ThemeContext);

    const ContainerStyles = {
        boxShadow: ' 0 .125rem .25rem rgba(0, 0, 0, .075)',
        borderRadius: '5px',
        backgroundColor: themeContext.isDarkMode ? '#2b3945' : 'white',
        width: '25%', height: '715px', marginRight: '15px',
        color: themeContext.textColor
    }

    return <Box className={classes['list-container']} sx={ContainerStyles} display={"flex"} flexDirection={"column"}>
        <Typography className={classes.title} variant={"h6"} mt={2} ml={3} mr={3} fontWeight={"bold"}>
            Favourites
        </Typography>
        <List/>
    </Box>
}
