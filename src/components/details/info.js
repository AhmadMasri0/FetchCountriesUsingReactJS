import {Box, Typography} from "@mui/material";
import BorderCountries from "./borderCountries";
import {useContext, useEffect, useState} from "react";
import classes from './details.module.css';
import ThemeContext from "../../store/theme-context";

function InfoItem({label, value}) {

    const labelStyle = {marginBottom: '12px', fontWeight: '600'};

    return <label style={labelStyle}>
        {label}
        <span> {value}</span>
    </label>
}

export default function Info({country}) {

    const [borders, setBorders] = useState();
    const themeContext = useContext(ThemeContext);

    const style = themeContext.isDarkMode ? {color:'white'} : {};

    useEffect(() => {
        setBorders(country.borders);
    }, [country]);

    return <Box mt={'40px'} width={'45%'} className={classes.info} style={style}>
        <Typography fontWeight={600} mb={'25px'} variant={"h5"}>
            {country.name.common}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
            <Box display={"flex"} flexDirection={"column"} marginBottom={'65px'}>
                <InfoItem label={'Native Name:'} value={Object.values(country.name.nativeName)[0].common}/>
                <InfoItem label={'Population:'} value={country.population.toLocaleString('en-US')}/>
                <InfoItem label={'Region:'} value={country.region}/>
                <InfoItem label={'Sub Region:'} value={country.subregion}/>
                <InfoItem label={'Capital:'} value={country.capital ? country.capital[0] : '-'}/>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
                <InfoItem label={'Top Level Domain:'} value={country.tld[0]}/>
                <InfoItem label={'Currencies:'} value={Object.values(country.currencies)[0].name}/>
                <InfoItem label={'Languages:'} value={Object.values(country.languages)[0]}/>
            </Box>
            {borders && <BorderCountries borders={borders}/>}
        </Box>
    </Box>;
}
