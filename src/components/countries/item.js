export default function Item({mt, title, value}) {

    return <p style={{fontWeight: 'bold', marginBottom: '6px', marginTop: mt}}>
        {title}:
        <span style={{fontWeight: '500'}}> {value}</span>
    </p>;
}
