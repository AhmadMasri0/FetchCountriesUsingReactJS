import {List as LIST} from "@mui/material";
import {useContext, useState} from "react";
import ListItem from "./listItem";
import CountriesContext from "../../store/countries-context";

export default function List() {

    const [border, setBorder] = useState('');
    const countriesContext = useContext(CountriesContext);
    const favourites = countriesContext.favourites;

    const listStyles = {
        height: '600px', marginTop: '16px', marginRight: '24px', marginLeft: '24px', overflow: 'auto', border
    };

    const drop = (event) => {
        const draggedCountry = JSON.parse(event.dataTransfer.getData("Text"));
        countriesContext.addToFavourites(draggedCountry);
        setBorder('none');
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }
    const dragEnter = () => {
        setBorder('1px solid #27ae60');
    }
    const dragLeave = () => {
        setBorder('none');
    }

    return <LIST sx={listStyles} onDrop={drop} onDragOver={allowDrop} onDragEnter={dragEnter} onDragLeave={dragLeave}>

        {favourites.map(country =>
            <ListItem src={country.flags && country.flags.svg} name={country.name && country.name.common}/>
        )}
    </LIST>
}
