import classes from './details.module.css';

export default function Info(props) {

    return <div className={classes.info}>
        <h2>Belgium</h2>
        <div className={classes['more-details']}>
            <div className={classes.col1}>
                <label>
                    Native Name:
                    <span> Belgie</span>
                </label>
                <label>
                    Population:
                    <span> 33,319,511</span>
                </label>
                <label>
                    Region:
                    <span> Europe</span>
                </label>
                <label>
                    Sub Region:
                    <span> Western Europe</span>
                </label>

                <label>
                    Capital:
                    <span> Brussels</span>
                </label>
            </div>
            <div className={classes.col2}>
                <label>
                    Top Level Domain:
                    <span> .be</span>
                </label>
                <label>
                    Currencies:
                    <span> Euro</span>
                </label>

                <label>
                    Languages:
                    <span> Dutch, French, German</span>
                </label>
            </div>
            <div className={classes['countries-container']}>
                <label>
                    Border countries:
                </label>
                <div className={classes.countries}>
                    <div className={classes.btn}>
                        <a href="./">
                            France
                        </a>
                    </div>
                    <div className={classes.btn}>
                        <a href="./">
                            Germany
                        </a>
                    </div>
                    <div className={classes.btn}>
                        <a href="./">
                            Netherlands
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
