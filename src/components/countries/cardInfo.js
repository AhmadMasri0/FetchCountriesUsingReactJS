import {CardContent, Typography} from "@mui/material";
import CountryItem from "./countryItem";
import ThemeContext from "../../store/theme-context";
import {useContext} from "react";

export default function CardInfo({country}) {

    const themeContext = useContext(ThemeContext);

    return <CardContent sx={{height: '130px'}} style={themeContext.componentStyle}>
        <Typography sx={{fontWeight: 'bold', marginLeft: '5px', fontSize: '16px', color: themeContext.textColor}}
                    gutterBottom variant="h6" component="div">
            {country.name.official}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <CountryItem mt={'10px'} title={'Population'}
                         value={country.population.toLocaleString('en-US')}/>
            <CountryItem mt={'6px'} title={'Region'}
                         value={country.region}/>
            <CountryItem mt={'6px'} title={'Capital'}
                         value={country.capital ? country.capital[0] : '-'}/>
        </Typography>
    </CardContent>
}
