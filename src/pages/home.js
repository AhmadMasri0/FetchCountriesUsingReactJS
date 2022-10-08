import SearchFilterContainer from "../components/containers/searchFilterContainer";
import HomeContentContainer from "../components/containers/homeContentContainer";

export default function Home() {



    return <>
        <SearchFilterContainer searchPlaceholder={'Search for a country...'} filterLabel={'Filter by'}/>
        <HomeContentContainer/>
    </>
}
