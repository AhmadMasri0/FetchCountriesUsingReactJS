import {Box, Typography} from "@mui/material";


export default function ListItem({src, name, removeCountry, darkMode}) {

    const style = darkMode ? {backgroundColor: '#202c37', color:'white'} : {};

    return <Box display={"flex"} alignItems={"center"} mb={1} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"}>
            <img style={{height: '20px', width: '27px', borderRadius: '5px'}} src={src} alt={src}/>
            <Typography fontSize={'0.6rem'} m={0} ml={'5px'} fontWeight={'bold'}>
                {name}
            </Typography>
        </Box>
        <Typography variant={'span'} width={'8px'} height={'8px'} padding={'3px 5px 5px'}
                    fontSize={'7px'} fontWeight={800} bgcolor={'#F8F9FAFF'} textAlign={"center"}
                    borderRadius={'5px'} sx={{'&:hover': {cursor: 'pointer'}}}
                    onClick={() => removeCountry(name)} style={style}>
            X
        </Typography>

    </Box>;
}

