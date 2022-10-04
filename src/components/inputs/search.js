import {Input, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from '../inputs/inputs.module.css';
import {useRef} from "react";


export default function Search({placeholder, searchHandler, darkMode}) {

    const searchRef = useRef();
    const style = darkMode ? {backgroundColor: '#2b3945', color:'white'} : {};

    const search = () => {
        searchHandler(searchRef.current.children[1].value);
    }

    return <Input style={style} ref={searchRef} onKeyUp={search} className={classes.search} placeholder={placeholder}
                  startAdornment={
                      <InputAdornment style={style} className={classes.icon} position="start">
                          <SearchIcon/>
                      </InputAdornment>
                  }/>;
}
