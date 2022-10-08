import ButtonContainer from "../components/containers/buttonContainer";
import CountryDetails from '../components/details/details';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Details() {


    const {id} = useParams();
    const URL = 'https://restcountries.com/v3.1/alpha/' + id;
    const [country, setCountry] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                setCountry(res[0]);
                setIsLoaded(true);
            });
    }, [URL]);

    return <>
        <ButtonContainer name={'Back'}/>
        <CountryDetails isLoaded={isLoaded} country={country}/>
    </>
}
