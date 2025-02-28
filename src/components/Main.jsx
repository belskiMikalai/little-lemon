import './Main.css';
import Section from './secondary/Section';
import Button from './secondary/Buttton';
import Card from './secondary/Card';
import Comment from './secondary/Comment';
import { heroImg, reviewImg, logoStyled, about, about2} from '../main';

export default function Main() {
  const aboutColor = 'linear-gradient(to bottom, var(--primary-color1) 26%, white 26%)'
  const reviews = [
    {
      id: 0,
      userName: 'Ishaq Hubbard',
      text: 'Paragraph text regular 16pt 1.5 line height Max 65 characters per line...',
      score: 5,
    },
    {
      id: 1,
      userName: 'Hector Mcpherson',
      text: 'Paragraph text regular 16pt 1.5 line height Max 65 characters per line...',
      score: 4,
    },
    {
      id: 2,
      userName: 'Madeleine Hammond',
      text: 'Paragraph text regular 16pt 1.5 line height Max 65 characters per line...',
      score: 5,
    }
  ]
  return (
    <main>
      <Section backgroundcolor="var(--primary-color1)" className='hero'>
        <div>
          <h1 className='title'>Little Lemon</h1>
          <h2 className='sub-title'>Chikago</h2>
        </div>
        <p className='lead'> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <div>
          <Button type="primary">Reserve a table</Button>
        </div>
        <div className='image-container'>
          {
            heroImg.map(({id, img, alt}) => {return <img src={img} alt={alt} key={id} />})
          }
        </div>
      </Section>
      <Section className='order'>
        <div className='order-header'>
          <h1 className='title'>Specials</h1>
          <Button type="primary">Order now!</Button>
        </div>
        <div className='card-container'>
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section className='reviews'>
        <h1 className='title'>Testimonials</h1>
        <div className='comments'>
          {reviews.map(({id, userName, text, score}) => {
            return (
              <Comment key={id} userName={userName} reviewScore={score} userImg={reviewImg[id]}>{text}</Comment>
            );
          })}
        </div>
      </Section>
      <Section backgroundcolor={aboutColor} className='about-us'>
        <div className='about-header'>
          <img src={logoStyled} alt='Little lemon logo' />
          <div>
            <h1 className='title'>Little Lemon</h1>
            <h2 className='sub-title'>Chikago</h2>
          </div>
        </div>
        <div className='about-container'>
          <p className='card-text firstParagraph'>
            <span className='highlight'>Aliquam tincidunt urna dolor, vitae vestibulum tortor sagittis commodo.</span> <br/><br/> Nam feugiat mi et vehicula varius.
             Cras suscipit odio eros, sit amet ultricies leo ullamcorper non. In tincidunt augue nibh, vitae pretium libero pretium vel.
             Suspendisse metus erat, volutpat lacinia tincidunt eget, gravida vitae turpis. Cras convallis ex et convallis aliquam.
             Nunc id leo sagittis, condimentum magna a, eleifend magna.
          </p>
          <img className='firstImg' src={about2} alt='Little lemon owner'/>
          <img className='secondImg' src={about} alt='Little lemon restuarant'/>

          <p className='card-text secondParagraph'>
            <span className='highlight' >Aliquam tristique eros quis feugiat pretium.</span> <br/><br/>
             Aliquam consequat ligula nec quam egestas, id finibus risus lacinia. Duis gravida porttitor nisi, eu eleifend mauris pulvinar et.
              Sed semper feugiat nisi vel ali
          </p>
        </div>
      </Section>
    </main>
  )
}
