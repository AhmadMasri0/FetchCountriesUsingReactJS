import {Box, Typography} from "@mui/material";


export default function ListItem({src, name, removeCountry, darkMode}) {


    const removeSx = {
        width: '8px', height: '7px',
        padding: '2px 3px 4px',
        fontSize: '7px', fontWeight: '800',
        bgcolor: darkMode ? '#202c37' : '#F8F9FAFF',
        textAlign: 'center',
        borderRadius: '5px',
        '&:hover': {cursor: 'pointer'}
    }
    return <Box display={"flex"} alignItems={"center"} mb={1} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
            <img style={{height: '20px', width: '27px', borderRadius: '5px'}} src={src} alt={src}/>
            <Typography fontSize={'0.6rem'} m={0} ml={'5px'} fontWeight={'bold'}>
                {name}
            </Typography>
        </Box>
        <Typography variant={'span'} sx={removeSx} onClick={() => removeCountry(name)}>
            X
        </Typography>
    </Box>;
}

