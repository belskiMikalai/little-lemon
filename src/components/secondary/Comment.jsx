import './Comment.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as SolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as EmtyStar } from "@fortawesome/free-regular-svg-icons";


export default function Comment({children, userImg, userName, reviewScore}) {

    // Card stack effect background
    const bgColor = userImg.id % 2 == 1 ? "white" : "var(--highlight1)";

    const maxRating = 5;
    const starList = [];
    for (let i = 1; i <= maxRating; i++) {
        if (i > reviewScore) {
            starList.push(EmtyStar);
            continue;
        }
        starList.push(SolidStar);
    }

    return (
        <article className='comment-container' style={{backgroundColor: bgColor}}>
            <img src={userImg} alt={userName} />
            <div>
                <h3 className='card-title'> {userName}</h3>
                <p className='card-text'> {children} </p>
            </div>
            <div className='stars-container'>
                {
                    starList.map((star, id) => {
                        return <FontAwesomeIcon key={id} icon={star}/>;
                    })
                }
            </div>
        </article>
    );
}