import Grid2 from "@mui/material/Unstable_Grid2";
import Country from "./country";


export default function Countries({countries, addCountry, favourites, darkMode}) {

    const style = darkMode ? {backgroundColor: '#202c37', color:'white'} : {};


    return <Grid2 container md={9} rowSpacing={7} columnSpacing={7} style={style}>
        {countries.map((country) =>
            <Country darkMode={darkMode} favourites={favourites} key={country.cca2} country={country} addCountry={addCountry}/>
        )}
    </Grid2>;
}
