import heroImage from '../assets/images/Group 77.png'

export default function Hero () {
    return (
        <div className="hero">
            <img src={heroImage} alt="hero" />
            <div className="hero-text-content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}