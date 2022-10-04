import SearchFilterContainer from "../components/containers/searchFilterContainer";
import HomeContentContainer from "../components/containers/homeContentContainer";
import {useEffect, useState} from "react";

export default function Home({darkMode}) {

    const [URL, setURL] = useState('https://restcountries.com/v3.1/all');
    const [allCountries, setAllCountries] = useState([]);
    const [currentCountries, setCurrentCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {

        let canceled = false;

        fetch(URL)
            .then(res => {
                if (res.status === 200)
                    return res.json();
                throw new Error();
            })
            .then(countries => {
                if (!canceled) {
                    if (filterValue) {
                        const filteredCountries = countries.filter((c) => c.region.includes(filterValue));
                        setCurrentCountries(filteredCountries);
                    } else {
                        !searchValue && setAllCountries(countries);
                        setCurrentCountries(countries);
                    }
                }
            })
            .catch(() => {
                setAllCountries([]);
                setCurrentCountries([]);
            });

        return () => (canceled = true);

    }, [URL]);

    const filterCountries = (countries, value) => {

        return countries.filter((c) => c.name.official.toLowerCase().includes(value.toLowerCase()));
    }

    const filteringSearchingHandler = (filterV, searchV) => {
        let countries = filterCountries(filterV === 'Favourites' ? favourites : allCountries, searchV);
        filterV && (filterV !== 'Favourites') && (countries = countries.filter(c => c.region.includes(filterV)));
        setCurrentCountries(countries);
    }

    const searchHandler = (value) => {
        setSearchValue(value);
        setTimeout(() => {
            setURL(value ? 'https://restcountries.com/v3.1/name/' + value : 'https://restcountries.com/v3.1/all');
        }, 300);
    }

    const filterHandler = (value) => {

        setFilterValue(value);
        if (searchValue) {
            filteringSearchingHandler(value, searchValue);
        } else {
            setCurrentCountries(value === 'Favourites' ? favourites
                : value ? allCountries.filter((c) => c.region.includes(value)) : allCountries);
        }
    }

    return <>
        <SearchFilterContainer darkMode={darkMode} search={searchHandler} filter={filterHandler}
                               searchPlaceholder={'Search for a country...'}/>
        <HomeContentContainer darkMode={darkMode} favourites={favourites} FavouritesListHandler={setFavourites}
                              countries={currentCountries}/>
    </>
}
