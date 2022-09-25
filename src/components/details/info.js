import {Box, InputLabel, Typography} from "@mui/material";
import BorderCountries from "./borderCountries";

export default function Info() {


    const labelStyle = {marginBottom: '12px', fontWeight: '600', color: 'black'};

    return <Box mt={'40px'} width={'45%'} className={'info'}>
        <Typography fontWeight={600} mb={'25px'} variant={"h5"}>
            Belgium
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
            <Box display={"flex"} flexDirection={"column"}>
                <InputLabel sx={labelStyle}>
                    Native Name:
                    <span> Belgie</span>
                </InputLabel>
                <InputLabel sx={labelStyle}>
                    Population:
                    <span> 33,319,511</span>
                </InputLabel>
                <InputLabel sx={labelStyle}>
                    Region:
                    <span> Europe</span>
                </InputLabel>
                <InputLabel sx={labelStyle}>
                    Sub Region:
                    <span> Western Europe</span>
                </InputLabel>

                <InputLabel sx={{...labelStyle, marginBottom: '55px'}}>
                    Capital:
                    <span> Brussels</span>
                </InputLabel>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
                <InputLabel sx={labelStyle}>
                    Top Level Domain:
                    <span> .be</span>
                </InputLabel>
                <InputLabel sx={labelStyle}>
                    Currencies:
                    <span> Euro</span>
                </InputLabel>

                <InputLabel sx={labelStyle}>
                    Languages:
                    <span> Dutch, French, German</span>
                </InputLabel>
            </Box>
            <BorderCountries labelStyle={labelStyle}/>
        </Box>
    </Box>;
}
