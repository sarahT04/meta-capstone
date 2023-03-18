import '../styles/Testimonials.css';

interface TestimonialCardTypes {
    className: string;
    name: string;
    age: number;
    review: string;
}

const dummyTestimonials: TestimonialCardTypes[] = [
    { className: "first", name: "Sarah", age: 18, review: "I went to Little Lemon with my friends for a quick lunch break between classes, and I was pleasantly surprised! The bruschetta was amazing and tasted really fresh. It was a bit pricier than what I'm used to, but it was worth it. I'll definitely be back for more!" },
    { className: "second", name: "Joe", age: 31, review: "As a car salesman, I'm always on the go and need a quick meal between appointments. Little Lemon was the perfect spot for me! The Greek salad was delicious and very filling. I also appreciated the cozy atmosphere and friendly service. Highly recommend!" },
    { className: "third", name: "Ana", age: 54, review: "I had a business lunch at Little Lemon and was impressed by the quality of the food and the attention to detail. The lemon dessert was the perfect way to end the meal. I also appreciated the attentive service and the overall ambiance of the restaurant. Will definitely be coming back!" },
    { className: "fourth", name: "Michael", age: 24, review: "I'm a big fan of Mediterranean cuisine, so I was excited to try Little Lemon. The bruschetta was definitely the highlight of the meal - it was flavorful and had the perfect balance of toppings. The lemon dessert was also good, but a bit too sweet for my taste. Overall, a solid choice for a casual dinner with friends." },
]

function TestimonialCard({ name, age, review, className }: TestimonialCardTypes) {
    return (
        <section className={className}>
            <h4 className="paragraph">"{review}"</h4>
            <p className="lead-text testimonials-description">{name}</p>
            <span className="lead-text span-age">{age}</span>
        </section>
    )
}

export default function Testimonials() {
    return (
        <main id="testimonials">
            <h2>
                What they say about us?
            </h2>
            <section id="testimonials-grid">
                <TestimonialCard {...dummyTestimonials[0]} />
                <TestimonialCard {...dummyTestimonials[1]} />
                <TestimonialCard {...dummyTestimonials[2]} />
                <TestimonialCard {...dummyTestimonials[3]} />
            </section>
        </main>
    )
}