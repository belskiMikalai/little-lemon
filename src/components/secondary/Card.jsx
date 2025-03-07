import './Card.css';
export default function Card(props) {
    return (
        <article className='card'>
            <div>
            </div>
            <div>
                <div>
                    <h1 className='card-title'>{props.cardName}</h1>
                    <p className='highlight'>{props.price}</p>
                </div>
                <div>
                    <p className='card-text'>{ props.children }</p>
                </div>
                <div>
                    <a href='#' className='bold'>{ props.buy }</a>
                </div>
            </div>
        </article>
    );
};