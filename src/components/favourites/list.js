import {List as LIST} from "@mui/material";
import {useEffect, useState} from "react";
import ListItem from "./listItem";

export default function List({FavouritesListHandler, addedCountry, darkMode}) {

    const [favouritesList, setFavouritesList] = useState(JSON.parse(localStorage.getItem('fav')) || []);
    const [border, setBorder] = useState('');

    const listStyles = {
        height: '600px', marginTop: '16px', marginRight: '24px', marginLeft: '24px', overflow: 'auto', border
    };

    useEffect(() => {
        try {
            localStorage.setItem('fav', JSON.stringify(favouritesList));
        } catch (e) {
            alert(e);
        }
        FavouritesListHandler(favouritesList);
    }, [favouritesList]);
    useEffect(() => {
        addedCountry && addCountry(addedCountry, true);
    }, [addedCountry]);

    const drop = (event) => {
        const draggedCountry = JSON.parse(event.dataTransfer.getData("Text"));
        addCountry(draggedCountry);
    }
    const addCountry = (newCountry, isAStarClicked) => {
        const country = favouritesList.find(c => c.cca2 === newCountry.cca2);

        if (!country) {
            const list = [...favouritesList, newCountry];
            setFavouritesList(list);
            FavouritesListHandler(list);
        } else if (isAStarClicked) {
            removeCountry(country.name.common);
        }
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
    const removeCountry = (name) => {
        const countries = favouritesList.filter(c => c.name.common !== name);

        setFavouritesList(countries);
        FavouritesListHandler(countries);
    }

    return <LIST sx={listStyles} onDrop={drop} onDragOver={allowDrop} onDragEnter={dragEnter} onDragLeave={dragLeave}>

        {favouritesList.map(country =>
            <ListItem darkMode={darkMode}
                      src={country.flags.svg}
                      name={country.name.common}
                      removeCountry={removeCountry}/>
        )}
    </LIST>
}
