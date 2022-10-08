import {Card, CardMedia} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import classes from './country.module.css';
import CardInfo from "./cardInfo";
import CountriesContext from "../../store/countries-context";


export default function Country({country}) {

    const [opacity, setOpacity] = useState('1');
    const [starBg, setStarBg] = useState('lightgray');
    const countriesContext = useContext(CountriesContext);
    const favourites = countriesContext.favourites;

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
        countriesContext.addToFavourites(country, true);
    }


    return (
        <Grid2 xs={12} sm={6} lg={4}>
            <Card sx={{
                boxShadow: ' 0 .125rem .25rem rgba(0, 0, 0, .075)', '&:hover': {cursor: 'pointer'}
            }}>
                <Link to={`./details/${country.cca2}`} onDragStart={dragStart}
                      onDragEnd={dragEnd} style={{textDecoration: 'none', opacity}}>
                    <CardMedia height="160" component="img" alt={country.flag} image={country.flags.svg}/>
                    <CardInfo country={country}/>
                </Link>
                <StarIcon className={classes.star} onClick={addToList} style={{
                    color: starBg, float: 'right', display: 'none', marginTop: '-30px', marginRight: '10px'
                }}/>
            </Card>
        </Grid2>

    );
}
