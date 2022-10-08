import SearchFilterContainer from "../components/containers/searchFilterContainer";
import HomeContentContainer from "../components/containers/homeContentContainer";
import {useContext} from "react";
import CountriesContext from "../store/countries-context";

export default function Home() {

    const countriesContext = useContext(CountriesContext);

    return <>
        <SearchFilterContainer searchPlaceholder={'Search for a country...'} filterLabel={'Filter by'}/>
        <HomeContentContainer countries={countriesContext.countries}/>
    </>
}
