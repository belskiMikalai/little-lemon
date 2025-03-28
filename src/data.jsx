
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
import logoStyled from './assets/img/logoStyled.png';
import logoStyled2 from './assets/img/logoStyled2.png';
import about from './assets/img/about.png';
import about2 from './assets/img/about2.png';
import card1 from './assets/img/card1.png';
import card2 from './assets/img/card2.png';
import card3 from './assets/img/card3.png';

const links = [
  {
    id: 0,
    label: 'Home',
    href: '/',
  },
  {
    id: 1,
    label: 'About',
    href: '#',
  },
  {
    id: 2,
    label: 'Menu',
    href: '#',
  },
  {
    id: 3,
    label: 'Reservation',
    href: '/Reservation',
  },
  {
    id: 4,
    label: 'Order Online',
    href: '#',
  },
];
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
  ]
  const reviews = [
  {
    id: 0,
    userName: 'Ishaq Hubbard',
    src: review1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    score: 5,
  },
  {
    id: 1,
    userName: 'Hector Mcpherson',
    src: review2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    score: 4,
  },
  {
    id: 2,
    userName: 'Madeleine Hammond',
    src: review3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    score: 5,
  }
];
const productInfo = [
  {
    id: 0,
    src: card1,
    name: "Greek salad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "5$"
  },
  {
    id: 1,
    src: card2,
    name: "Bruschetta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "2$"
  },
  {
    id: 3,
    src: card3,
    name: "Lemon cake",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "6$"
  },
];
export {
  logo,
  logoStyled,
  logoStyled2,
  about,
  about2,
  links,
  heroImg,
  reviews,
  productInfo,
}