import {CardContent, Typography} from "@mui/material";
import CountryItem from "./countryItem";

export default function CardInfo({country, darkMode}) {

    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};

    return <CardContent sx={{height: '130px'}} style={style}>
        <Typography sx={{fontWeight: 'bold', marginLeft: '5px', fontSize: '16px', color: darkMode ? 'white' : 'black'}}
                    gutterBottom variant="h6" component="div">
            {country.name.official}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <CountryItem mt={'10px'} title={'Population'} darkMode={darkMode}
                         value={country.population.toLocaleString('en-US')}/>
            <CountryItem mt={'6px'} title={'Region'} darkMode={darkMode}
                         value={country.region}/>
            <CountryItem mt={'6px'} title={'Capital'} darkMode={darkMode}
                         value={country.capital ? country.capital[0] : '-'}/>
        </Typography>
    </CardContent>
}
