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

    const filterCountries = (countries, searchV, filterV) => {
        let res =  countries.filter((c) => c.name.official.toLowerCase().includes(searchV.toLowerCase()));
        res = (filterV && (filterV !== 'Favourites')) ? res.filter(c => c.region.includes(filterV)) : res;
        return res;
    }

    const filteringSearchingHandler = (filterV, searchV) => {
        let countries = filterCountries(filterV === 'Favourites' ? favourites : allCountries, searchV, filterV);
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
        <SearchFilterContainer darkMode={darkMode} searchHandler={searchHandler} filterHandler={filterHandler}
                               searchPlaceholder={'Search for a country...'} filterLabel={'Filter by'}/>
        <HomeContentContainer darkMode={darkMode} favourites={favourites} FavouritesListHandler={setFavourites}
                              countries={currentCountries}/>
    </>
}
