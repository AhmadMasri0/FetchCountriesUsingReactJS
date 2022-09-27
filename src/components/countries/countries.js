import Grid2 from "@mui/material/Unstable_Grid2";
import Country from "./country";
import af from '../../assets/af.svg'
import al from '../../assets/al.svg'
import ax from '../../assets/ax.svg'
import dz from '../../assets/dz.svg'
import br from '../../assets/br.svg'
import de from '../../assets/de.svg'
import us from '../../assets/us.svg'
import is from '../../assets/is.svg'
import {Link} from "react-router-dom";

export default function Countries() {

    const countries = [
        {name: 'Germany', population: '81,770,900', capital: 'Berlin', src: de, region: 'Europe'},
        {
            name: 'United states of America',
            population: '333,523,205',
            capital: 'Washington D.C.',
            src: us,
            region: 'Americas'
        },
        {name: 'Brazil', population: '233,500,295', capital: 'Brasilia', src: br, region: 'Americas'},
        {name: 'Iceland', population: '24,523,205', capital: 'Reykjavik', src: is, region: 'Europe'},
        {name: 'Afghanistan', population: '9,523,205', capital: 'Kabul', src: af, region: 'Asia'},
        {name: 'Aland islands', population: '105,523,205', capital: 'Mariehamen', src: ax, region: 'Europe'},
        {name: 'Albania', population: '92,400,205', capital: 'Tirana', src: al, region: 'Europe'},
        {name: 'Algeria', population: '100,805,950', capital: 'Algeirs', src: dz, region: 'Africa'},
    ]

    return <Grid2 container rowSpacing={9} columnSpacing={8} ml={'40px'} mr={'40px'} mt={'40px'} maxWidth={'1360px'}>
        {countries.map((country) =>
            <Grid2 xs={12} sm={6} md={4} lg={3}>
                <Link to={'./details'} style={{textDecoration: 'none'}}>
                    <Country name={country.name} population={country.population} capital={country.capital}
                             src={country.src}
                             region={country.region}/>
                </Link>
            </Grid2>
        )}

    </Grid2>

}
