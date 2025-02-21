import './Main.css'
import Section from './secondary/Section'
import Button from './secondary/Buttton'
import { heroImg } from '../main'
export default function Main() {
  return (
    <main>
      <Section backgroundcolor="var(--primary-color1)" className='hero'>
        <div>
          <h1 className='title'>Little Lemon</h1>
          <h2 className='sub-title'>Chikago</h2>
        </div>
        <p className='lead'> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <div>
          <button>Reserve a tab</button>
        </div>
        <div className='image-container'>
          {
            heroImg.map(({id, img, alt}) => {return <img src={img} alt={alt} key={id} />})
          }
        </div>
      </Section>
      <Section className='order'>
        <div>
          <h1>Specials</h1>
        </div>
        <Button type="primary">Order now!</Button>
      </Section>
      <Section className='reviews'>
        <h1>Testimonials</h1>
      </Section>
      <Section className='about-us'>
        <h1>
          About us
        </h1>
      </Section>
    </main>
  )
}
