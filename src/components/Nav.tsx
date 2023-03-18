import '../styles/Nav.css';
import Logo from './Logo';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Logo /></li>
                <li><Link to="/" className="nav-link section-title">MENU</Link></li>
                <li><Link to="/book" className="nav-link section-title">RESERVE</Link></li>
                <li><Link to="/" className="nav-link section-title">ORDER</Link></li>
            </ul>
        </nav>
    )
}