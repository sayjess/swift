import { Link } from "react-router-dom"

export default function About(){
    return (
        <div className="about-page-container">
            <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="about-hero-image" />
            <div className="about-page-content">
                <h1>From landmarks to hidden gems, our car rentals redefine adventures!</h1>
                <p>Fuel your road trip excitement with our top-notch travel car rentals. Each car is road-ready for your adventure, ensuring a hitch-free journey. (Hitch costs extra, but the memories are worth every mile! 😉)</p>
                <p>Meet our swift enthusiast team, who've lived the magic of touring the world on four wheels. We're here to share that passion and make your journey extraordinary!</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your car is ready.</h2>
                <Link className="link-button" to="/cars">Explore our cars</Link>
            </div>
        </div>
    )
}