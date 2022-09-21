import {Input, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export default function Search(props) {

    return <Input disableUnderline className={props.search} placeholder='Search for a country...'
                  startAdornment={
                      <InputAdornment className={props.icon} position="start">
                          <SearchIcon/>
                      </InputAdornment>
                  }
    />;
}
