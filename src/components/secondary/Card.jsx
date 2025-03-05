import './Card.css';
export default function Card(children, props) {
    return (
        <article className='card'>
            <div>
                <img />
            </div>
            <div>
                <div>
                    <h1 className='card-title'>{props.name}</h1>
                    <p className='highlight'>{props.price}</p>
                </div>
                <div>
                    <p className='card-text'>{ children }</p>
                </div>
                <div>
                    <a href='#' className='bold'>{ children }</a>
                </div>
            </div>
        </article>
    );
};