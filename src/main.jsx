import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import logo from '/littleLemonLogo.png';
import img1 from './assets/img/img1.png';
import img2 from './assets/img/img2.png';
import img3 from './assets/img/img3.png';
import img4 from './assets/img/img4.png';
import img5 from './assets/img/img5.png';
import img6 from './assets/img/img6.png';
import review1 from './assets/img/review1.png';
import review2 from './assets/img/review2.png';
import review3 from './assets/img/review3.png';
import logoStyled from './assets/img/logoStyled.png'
import logoStyled2 from './assets/img/logoStyled2.png'
import about from './assets/img/about.png'
import about2 from './assets/img/about2.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const heroImg = [
  {
    id: 0,
    img: img1,
    alt: "Yummy Lemon pizzas from Nepal Italy brought to you by our chefs!"
  },
  {
    id: 1,
    img: img2,
    alt: "Preporation of Carbonara"
  },
  {
    id: 2,
    img: img3,
    alt: "Enterance to your joy and delight, Little Lemon 5 Ave 78!"
  },
  {
    id: 3,
    img: img4,
    alt: "Our custumer service0"
  },
  {
    id: 4,
    img: img5,
    alt: "Our beautiful restuarant, Little lemon!"
  },
  {
    id: 5,
    img: img6,
    alt: "Meals from the Medetirranian sea!"
  }
];
const reviewImg = [
  {
    id: 0,
    src: review1,
    alt: "photo"
  },
  {
    id: 1,
    src: review2,
    alt: "photo"
  },
  {
    id: 2,
    src: review3,
    alt: "photo"
  },
];
export {
  logo,
  logoStyled,
  logoStyled2,
  about,
  about2,
  heroImg,
  reviewImg,
}
