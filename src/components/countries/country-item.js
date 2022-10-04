export default function CountryItem({mt, title, value, darkMode}) {

    return <p style={{fontWeight: '600', marginBottom: '-1px', color: darkMode ? 'white' : 'black', marginTop: mt}}>
        {title}:
        <span style={{fontWeight: '400', color: darkMode ? 'white' : 'grey'}}> {value}</span>
    </p>;
}
