import './Main.css'
import Section from './secondary/Section'
export default function Main() {
  return (
    <main>
      <Section backgroundcolor="var(--primary-color1)" className='hero'>
        <h1 className='title'>Little Lemon</h1>
        <h2 className='sub-title'>Chikago</h2>
        <p className='lead'> LEad text!</p>
        <p className='bold'>Order now!</p>
        <h3 className='card-title'>Card title</h3>
        <p className='card-text'>Card text</p>
        <p className='highlight'> Highlight</p>
      </Section>
      <Section className='order'>
        <h1>Specials</h1>
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
