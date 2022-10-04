import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import classes from '../inputs/inputs.module.css';
import {useState} from "react";


export default function Filter({filterHandler, darkMode, filterLabel}) {

    const filterOptions = ['Asia', 'Africa', 'America', 'Europe', 'Oceania', 'Favourites'];

    const [region, setRegion] = useState('');
    const [isShown, setIsShown] = useState('none');

    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};
    const labelStyle = darkMode ? {color: 'white'} : {};
    const sx = darkMode ? {margin: '0', marginTop: '-8px', marginBottom: '-8px', paddingTop: '15px'} : {};

    const clearStyle = {
        fontSize: '12px', marginTop: '-8px',
        marginBottom: '-8px', display: isShown,
        flexDirection: 'row-reverse', backgroundColor: darkMode ? '#2b3945' : "transparent",
        color: darkMode ? 'white' : 'black'
    };
    const filter = (e) => {
        setIsShown(e.target.value ? '' : 'none');
        setRegion(e.target.value ? e.target.value : '');
        filterHandler(e.target.value);
    }

    return <FormControl style={style}>

        <InputLabel style={labelStyle} id="filter-label">{filterLabel}</InputLabel>
        <Select value={region} onChange={(e) => filter(e)} labelId="filter-label" label={filterLabel}
                className={classes.select} style={style}>
            {filterOptions.map((region) => (
                <MenuItem style={style} sx={sx}
                          key={region} value={region}>
                    {region}
                </MenuItem>
            ))}
            {<MenuItem onClick={filter} style={clearStyle}>
                clear filter
            </MenuItem>}
        </Select>
    </FormControl>

}
