import classes from './details.module.css';
import CountryFlag from "./countryFlag";
import Info from "./info";
import {Box} from "@mui/material";

export default function Details({country, isLoaded}) {


    return <Box display={"flex"} justifyContent={"space-between"} alignSelf={"center"} flexWrap={'wrap'} ml={'72px'} mr={'72px'} mt={'60px'}
                className={classes.details}>
        {isLoaded && <CountryFlag cca2={country.cca2} src={country.flags.svg}/>}
        {isLoaded && <Info country={country}/>}
    </Box>
        ;
}
