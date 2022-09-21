import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Back() {

    return <Button variant="contained" sx={{
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0 0 0.175rem 0.09rem rgb(0 0 0 / 21%) !important',
            width: '120px',
            fontSize: '16px',
            height: '35px'
        }}>
            <ArrowBackIcon sx={{fontSize: '20px', marginLeft: '-15px!important', marginRight: '15px!important'}}/>
            <span style={{fontSize: '12px'}}>back</span>
        </Button>

}
