import Bruchetta from '../lib/img/bruchetta.svg';
import LemonDessert from '../lib/img/lemon dessert.jpg';
import GreekSalad from '../lib/img/greek salad.jpg';
import '../styles/Specials.css';

const specialsData = [
    { id: 0, name: 'Bruchetta', price: 20, description: 'Start your meal with our mouthwatering bruschetta, made with fresh tomatoes, garlic, and basil on top of toasted bread, for only $20.', src: Bruchetta },
    { id: 1, name: 'Lemon Dessert', price: 5, description: 'For dessert, try our zesty lemon dessert, a perfect balance of sweet and tangy flavors, for just $5.', src: LemonDessert },
    { id: 2, name: 'Greek Salad', price: 10, description: "If you're looking for a healthy option, our Greek salad is the way to go. Made with crisp lettuce, juicy tomatoes, cucumbers, feta cheese, and a zesty dressing, this salad is only $10.", src: GreekSalad },
]

export default function Specials() {
    return (
        <main id="specials">
            <h2>Specials</h2>
            <section id="specials-wrapper">
                {
                    specialsData.map((special) => (
                        <Card name={special.name} price={special.price} key={special.id}
                            description={special.description} src={special.src} />
                    ))
                }
            </section>
        </main>
    )
}

interface CardProps {
    name: string;
    price: number;
    description: string;
    src: string;
}

function Card({ name, price, description, src }: CardProps) {
    return (
        <article className="specials-card">
            <img src={src} alt={`Specials dish: ${name}`} />
            <p className="lead-text">{name} <span className="price">${price}</span></p>
            <p className="paragraph specials-description">{description}</p>
        </article>
    )
}