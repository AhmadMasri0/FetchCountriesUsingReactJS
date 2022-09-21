import classes from './details.module.css';
import Image from "./image";
import Info from "./info";

export default function Details(props) {

    return <div className={classes.details}>
        <Image/>
        <Info/>
    </div>;
}
