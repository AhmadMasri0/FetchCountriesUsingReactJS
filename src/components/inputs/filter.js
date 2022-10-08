import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import classes from '../inputs/inputs.module.css';
import {useContext, useState} from "react";
import CountriesContext from "../../store/countries-context";
import ThemeContext from "../../store/theme-context";


export default function Filter({filterLabel}) {

    const filterOptions = ['Asia', 'Africa', 'America', 'Europe', 'Oceania', 'Favourites'];
    const countriesContext = useContext(CountriesContext);
    const themeContext = useContext(ThemeContext);
    const [region, setRegion] = useState('');

    const sx = themeContext.isDarkMode ? {
        margin: '0',
        marginTop: '-8px',
        marginBottom: '-8px',
        paddingTop: '15px'
    } : {};

    const clearStyle = {
        fontSize: '12px', marginTop: '-8px',
        marginBottom: '-8px', display: region ? '' : 'none',
        flexDirection: 'row-reverse', backgroundColor: themeContext.isDarkMode ? '#2b3945' : "transparent",
        color: themeContext.textColor
    };

    const filter = (e) => {
        setRegion(e.target.value ? e.target.value : '');
        countriesContext.filterHandler(e.target.value);
    }

    return <FormControl style={themeContext.componentStyle}>

        <InputLabel style={{color: themeContext.textColor}} id="filter-label">{filterLabel}</InputLabel>
        <Select value={region} onChange={(e) => filter(e)} labelId="filter-label" label={filterLabel}
                className={classes.select} style={themeContext.componentStyle}>
            {filterOptions.map((region) => (
                <MenuItem style={themeContext.componentStyle} sx={sx}
                          key={region} value={region}>
                    {region}
                </MenuItem>
            ))}
            <MenuItem onClick={filter} style={clearStyle}>
                clear filter
            </MenuItem>
        </Select>
    </FormControl>

}
