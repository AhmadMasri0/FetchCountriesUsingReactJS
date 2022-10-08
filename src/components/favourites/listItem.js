import {Box, Typography} from "@mui/material";
import {useContext} from "react";
import CountriesContext from "../../store/countries-context";
import ThemeContext from "../../store/theme-context";


export default function ListItem({src, name}) {

    const countriesContext = useContext(CountriesContext);
    const themeContext = useContext(ThemeContext);

    const removeSx = {
        width: '8px', height: '7px',
        padding: '2px 3px 4px',
        fontSize: '7px', fontWeight: '800',
        bgcolor: themeContext.isDarkMode ? '#202c37' : '#F8F9FAFF',
        textAlign: 'center',
        borderRadius: '5px',
        '&:hover': {cursor: 'pointer'}
    }
    return <Box display={"flex"} alignItems={"center"} mb={1} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
            <img style={{height: '20px', width: '33px', borderRadius: '5px', objectFit: 'cover'}} src={src} alt={src}/>
            <Typography fontSize={'12px'} m={0} ml={'5px'} fontWeight={'600'}>
                {name}
            </Typography>
        </Box>
        <Typography variant={'span'} sx={removeSx} onClick={() => countriesContext.removeFromFavourites(name)}>
            X
        </Typography>
    </Box>;
}

