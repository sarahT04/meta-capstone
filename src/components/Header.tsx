import '../styles/Header.css';
import RestaurantPhoto from '../lib/img/restaurant food.jpg';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div id="hero-description">
                <h1 >
                    Little Lemon
                </h1>
                <h4 className="subtitle">
                    Savor the flavor of the Mediterranean at Little Lemon - where every bite is a burst of sunshine!
                </h4>
                <button className="yellow-rounded paragraph" onClick={() => navigate('/book')} >Reserve</button>
            </div>
            <img src={RestaurantPhoto} alt="Restaurant" height="334" />
        </header>
    )
}