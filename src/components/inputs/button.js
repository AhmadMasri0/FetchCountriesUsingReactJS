import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Btn({name, darkMode}) {
    const style = darkMode ? {backgroundColor: '#2b3945', color:'white'} : {};

    return <Button style={style} variant="contained" sx={{
        backgroundColor: 'white', color: 'black',
        boxShadow: '0 0 0.175rem 0.09rem rgb(0 0 0 / 21%)',
        width: '120px', fontSize: '16px', height: '35px'
    }}>
        <ArrowBackIcon sx={{fontSize: '20px', marginLeft: '-15px', marginRight: '15px'}}/>
        <span style={{fontSize: '12px'}}>{name}</span>
    </Button>

}
