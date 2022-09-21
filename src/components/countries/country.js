import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export default function Country(props) {

    const src = props.src;
    const name = props.name;
    const population = props.population;
    const capital = props.capital;
    const region = props.region;

    return (
        <Card sx={{
            boxShadow: ' 0 .125rem .25rem rgba(0, 0, 0, .075) !important',
            '&:hover': {
            cursor: 'pointer'
            }}}>
            <CardMedia
                height="160"
                component="img"
                alt="af"
                image={src}
            />
            <CardContent sx={{height: '130px'}}>
                <Typography sx={{fontWeight: 'bold', fontSize: '19px'}} gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p style={{fontWeight: 'bold',marginBottom: '6px', marginTop: '10px'}}>Population: <span style={{fontWeight: '500'}}>{population}</span></p>
                    <p style={{fontWeight: 'bold',marginBottom: '6px', marginTop: '6px'}}>Region: <span style={{fontWeight: '500'}}>{region}</span></p>
                    <p style={{fontWeight: 'bold',marginBottom: '6px', marginTop: '6px'}}>Capital: <span style={{fontWeight: '500'}}>{capital}</span></p>
                </Typography>
            </CardContent>
        </Card>
    );
}
