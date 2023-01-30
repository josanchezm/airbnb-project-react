import star from '../assets/images/Star 1.png'

export default function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {/* If badgeText possess a value, display it on the card */}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} alt="Card-image" />
            <div className="card--stats">
                <img src={star} alt="Star-image" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) ~</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}