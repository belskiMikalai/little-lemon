
export default function Card(props) {
    return (
        <article>
            <div>
                <img />
            </div>
            <div>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.price}</p>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <a>Order a delivery</a>
                </div>
            </div>
        </article>
    );
}