import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import classes from '../inputs/inputs.module.css';
import {useEffect, useState} from "react";


export default function Filter({filterHandler, darkMode}) {

    const regions = ['Asia', 'Africa', 'America', 'Europe', 'Oceania', 'Favourites'];
    const [region, setRegion] = useState('');
    const [isShown, setsShown] = useState('none');

    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};
    const labelStyle = darkMode ? {color: 'white'} : {};

    const clearStyle = {
        fontSize: '12px', marginTop: '-8px',
        marginBottom: '-8px', display: isShown,
        flexDirection: 'row-reverse', backgroundColor: darkMode ? '#2b3945' : "transparent",
        color: darkMode ? 'white' : 'black'
    };
    const filter = (e) => {
        setsShown(e.target.value ? '' : 'none');
        setRegion(e.target.value ? e.target.value : '');
        filterHandler(e.target.value);
    }

    return <FormControl style={style}>

        <InputLabel style={labelStyle} id="filter-label">Filter by</InputLabel>
        <Select value={region} onChange={(e) => filter(e)} labelId="filter-label" label="Filter by"
                className={classes.select} style={style}>
            {regions.map((region) => (
                <MenuItem style={style} sx={{margin: '0', marginTop: '-8px', marginBottom: '-8px', paddingTop: '15px'}}
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
