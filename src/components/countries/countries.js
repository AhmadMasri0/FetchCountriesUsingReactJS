import Grid2 from "@mui/material/Unstable_Grid2";
import Country from "./country";

export default function Countries({countries}) {

    return <Grid2 container md={9} rowSpacing={7} columnSpacing={7}>
        {countries.map((country) =>
            <Country key={country.cca2} country={country}/>
        )}
    </Grid2>;
}
