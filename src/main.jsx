import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from '/littleLemonLogo.png'
import img1 from './assets/img/img1.png'
import img2 from './assets/img/img2.png'
import img3 from './assets/img/img3.png'
import img4 from './assets/img/img4.png'
import img5 from './assets/img/img5.png'
import img6 from './assets/img/img6.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const heroImg = [
  {
    id: 1,
    img: img1,
    alt: "Yummy Lemon pizzas from Nepal Italy brought to you by our chefs!"
  },
  {
    id: 2,
    img: img2,
    alt: "Preporation of Carbonara"
  },
  {
    id: 3,
    img: img3,
    alt: "Enterance to your joy and delight, Little Lemon 5 Ave 78!"
  },
  {
    id: 4,
    img: img4,
    alt: "Our custumer service0"
  },
  {
    id: 5,
    img: img5,
    alt: "Our beautiful restuarant, Little lemon!"
  },
  {
    id: 6,
    img: img6,
    alt: "Meals from the Medetirranian sea!"
  }
];

export {
  logo,
  heroImg,
}
