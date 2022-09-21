import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const regions = [
    'Asia',
    'Africa',
    'America',
    'Europe',
    'Oceania',
]

export default function Filter(props) {
    return <FormControl>
        <InputLabel id="filter-label">Filter by region</InputLabel>
        <Select labelId="filter-label" label="Age" className={props.select}>
            {regions.map((region) => (
                <MenuItem key={region} value={region}>
                    {region}
                </MenuItem>
            ))}
        </Select>
    </FormControl>

}
