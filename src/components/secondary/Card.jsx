import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
export default function Card({children, name, price, img}) {
    return (
        <article className='card'>
            <img src={img} alt={name}/>
            <div className='card-main'>
                <div className='card-header'>
                    <h1 className='card-title'>{name}</h1>
                    <p className='highlight'>{price}</p>
                </div>
                <p className='card-text'>{children}</p>
                <a href='#' className='bold order-button'>
                    <span>Order a delivery</span>
                    <FontAwesomeIcon icon={faTruck} />
                </a>
            </div>
        </article>
    );
};