import './Main.css';
import Section from '../secondary/Section.jsx';
import Button from '../functional_elem/Button.jsx';
import Card from '../secondary/Card.jsx';
import Comment from '../secondary/Comment.jsx';
import { heroImg, logoStyled, reviews, about, about2} from '../../data.jsx';

export default function Main() {
  const aboutColor = 'linear-gradient(to bottom, var(--primary-color1) 26%, white 26%)';
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
          <Card price="30$" cardName="Cake" buy="Buy 30$">
            Text
          </Card>
          <Card price="30$" cardName="Cake" buy="Buy 30$">
            Text
          </Card>
          <Card price="30$" cardName="Cake" buy="Buy 30$">
            Text
          </Card>
        </div>
      </Section>
      <Section className='reviews'>
        <h1 className='title'>Testimonials</h1>
        <div className='comments'>
          {reviews.map(({id, userName, src, text, score}) => {
            return (
              <Comment key={id} userName={userName} reviewScore={score} userImg={src}>{text}</Comment>
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
