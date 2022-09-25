import {Input, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export default function Search({search, icon}) {

    return <Input className={search} placeholder='Search for a country...'
                  startAdornment={
                      <InputAdornment className={icon} position="start">
                          <SearchIcon/>
                      </InputAdornment>
                  }/>;
}
