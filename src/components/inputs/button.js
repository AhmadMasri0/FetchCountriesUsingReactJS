import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import ThemeContext from "../../store/theme-context";
import {useContext} from "react";

export default function Btn({name}) {

    const themeContext = useContext(ThemeContext);

    return <Button style={themeContext.componentStyle} variant="contained" sx={{
        backgroundColor: 'white', boxShadow: '0 0 0.175rem 0.09rem rgb(0 0 0 / 21%)',
        width: '120px', fontSize: '16px', height: '35px'
    }}>
        <Link to={'/'} style={{textDecoration: 'none', color: themeContext.textColor}}>
            <ArrowBackIcon sx={{fontSize: '20px', marginLeft: '-15px', marginRight: '15px', marginBottom: '-5px'}}/>
            <span style={{fontSize: '12px'}}>{name}</span>
        </Link>
    </Button>

}
