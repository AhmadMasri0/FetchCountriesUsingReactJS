import Grid2 from "@mui/material/Unstable_Grid2";
import Country from "./country";
import {useContext} from "react";
import CountriesContext from "../../store/countries-context";

export default function Countries() {

    const countriesContext = useContext(CountriesContext);

    return <Grid2 container md={9} rowSpacing={7} columnSpacing={7}>
        {countriesContext.countries.map((country) =>
            <Country key={country.cca2} country={country}/>
        )}
    </Grid2>;
}
