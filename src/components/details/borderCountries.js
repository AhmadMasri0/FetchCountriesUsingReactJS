import {Box, InputLabel} from "@mui/material";
import BorderCountry from "./borderCountry";


export default function BorderCountries({labelStyle}) {

    return <Box display={"flex"} flexWrap={"wrap"}>
        <InputLabel sx={labelStyle}>
            Border countries:
        </InputLabel>
        <Box display={"flex"}>
            <BorderCountry name={'France'}/>
            <BorderCountry name={'Germany'}/>
            <BorderCountry name={'Netherlands'}/>
        </Box>
    </Box>
}
