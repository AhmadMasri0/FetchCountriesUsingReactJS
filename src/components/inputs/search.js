import {Input, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from '../inputs/inputs.module.css';
import {useContext, useRef} from "react";
import CountriesContext from "../../store/countries-context";
import ThemeContext from "../../store/theme-context";


export default function Search({placeholder}) {

    const searchRef = useRef();
    const countriesContext = useContext(CountriesContext);
    const themeContext = useContext(ThemeContext);

    const search = () => {
        countriesContext.searchHandler(searchRef.current.children[1].value);
    }

    return <Input style={themeContext.componentStyle} ref={searchRef} onKeyUp={search} className={classes.search} placeholder={placeholder}
                  startAdornment={
                      <InputAdornment style={themeContext.componentStyle} className={classes.icon} position="start">
                          <SearchIcon/>
                      </InputAdornment>
                  }/>;
}
