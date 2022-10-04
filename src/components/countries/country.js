import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import CountryItem from "./country-item";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import classes from './country.module.css';

export default function Country({country, addCountry, favourites, darkMode}) {

    const [opacity, setOpacity] = useState('1');
    const [starBg, setStarBg] = useState('lightgray');

    useEffect(() => {
        const c = favourites.find(c => c.cca2 === country.cca2);
        if (c)
            setStarBg('orange');
        else
            setStarBg('lightgray');

    }, [favourites, country.cca2]);


    function dragStart(event) {
        event.dataTransfer.setData("Text", JSON.stringify(country));
        setOpacity('0.5');
    }

    function dragEnd() {
        setOpacity('1');
    }

    const addToList = () => {
        setStarBg(starBg === 'orange' ? 'lightgray' : 'orange');
        addCountry(country, true);
    }
    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};


    return (
        <Grid2 xs={12} sm={6} lg={4}>
            <Card sx={{
                boxShadow: ' 0 .125rem .25rem rgba(0, 0, 0, .075)',
                '&:hover': {cursor: 'pointer'}
            }}>
                <Link to={`./details/${country.cca2}`} onDragStart={dragStart}
                      onDragEnd={dragEnd} style={{textDecoration: 'none', opacity}}>
                    <CardMedia height="160" component="img" alt={country.flag} image={country.flags.svg}/>

                    <CardContent sx={{height: '130px'}} style={style}>
                        <Typography sx={{fontWeight: 'bold', fontSize: '16px', color: darkMode ? 'white' : 'black'}}
                                    gutterBottom
                                    variant="h6"
                                    component="div">
                            {country.name.official}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <CountryItem mt={'10px'} title={'Population'} darkMode={darkMode}
                                         value={country.population.toLocaleString('en-US')}/>
                            <CountryItem darkMode={darkMode} mt={'6px'} title={'Region'} value={country.region}/>
                            <CountryItem mt={'6px'} title={'Capital'} darkMode={darkMode}
                                         value={country.capital ? country.capital[0] : '-'}/>
                        </Typography>
                    </CardContent>
                </Link>
                <StarIcon className={classes.star} onClick={addToList}
                          style={{
                              color: starBg,
                              float: 'right',
                              display: 'none',
                              marginTop: '-30px',
                              marginRight: '10px'
                          }}/>
            </Card>
        </Grid2>

    );
}
