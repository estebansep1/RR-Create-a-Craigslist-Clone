export default function Posting(props) {
    return (
        <div style={{"border": "2px solid black", "border-radius": "15px"}}>
            <h2>{props.data.title}</h2>
            <img src={props.data.imageURL} alt={props.data.title} />
            <p>{props.data.description}</p>
            <p>{props.data.price}</p>
        </div>
    )
}