import './Main.css'
import Section from './secondary/Section'
export default function Main() {
  return (
    <main>
      <Section backgroundcolor="var(--primary-color1)" className='hero'>
        <h1>Little Lemon</h1>
        <h2>Chikago</h2>
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
