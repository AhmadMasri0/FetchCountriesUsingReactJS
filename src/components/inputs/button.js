import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";

export default function Btn({name, darkMode}) {
    const style = darkMode ? {backgroundColor: '#2b3945', color: 'white'} : {};

    return <Button style={style} variant="contained" sx={{
        backgroundColor: 'white', boxShadow: '0 0 0.175rem 0.09rem rgb(0 0 0 / 21%)',
        width: '120px', fontSize: '16px', height: '35px'
    }}>
        <Link to={'/'} style={{textDecoration: 'none', color: darkMode ? 'white' : 'black'}}>
            <ArrowBackIcon sx={{fontSize: '20px', marginLeft: '-15px', marginRight: '15px', marginBottom: '-5px'}}/>
            <span style={{fontSize: '12px'}}>{name}</span>
        </Link>
    </Button>

}
