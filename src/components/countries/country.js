import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Item from "./item";

export default function Country({src, capital, name, region, population}) {

    return (
        <Card sx={{boxShadow: ' 0 .125rem .25rem rgba(0, 0, 0, .075) !important', '&:hover': {cursor: 'pointer'}}}>
            <CardMedia height="160" component="img" alt="af" image={src}/>

            <CardContent sx={{height: '130px'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '19px'}} gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Item mt={'10px'} title={'Population'} value={population}/>
                    <Item mt={'6px'} title={'Capital'} value={capital}/>
                    <Item mt={'6px'} title={'Region'} value={region}/>
                </Typography>
            </CardContent>
        </Card>
    );
}
