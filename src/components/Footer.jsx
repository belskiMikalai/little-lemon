import NavBar from "./secondary/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { logoStyled2 } from "../main";
import './Footer.css'
export default function Footer() {
  return (
    <footer>
      <div>
        <NavBar className='navbar' navStyle={{margin: "42px 0 112px 0"}} aStyle={{color: "white"}}/>
        <div className="info-container">
          <div className="contacts">
            <h3 className="card-title">
              Contacts:
            </h3>
            <div className="contacts-text">
              <div>
                <p className="card-text">
                  Manager:  <br/>
                  Manager:  <br/>
                  Manager:  <br/>
                </p>
                <p className="card-text">
                  Company:  <br/>
                  Company:  <br/>
                  Company:  <br/>
                </p>
              </div>
              <div className="contacts-links">
                <p className="card-text">
                  <a href="tel:+943 67 898 49 90">+943 67 898 49 90</a> <br/>
                  <a href="tel:+943 67 898 49 90">+943 67 898 49 90</a> <br/>
                  <a href="tel:+943 67 898 49 90">+943 67 898 49 90</a> <br/>
                </p>
                <p className="card-text">
                  <a href="mailto:company@email.com">company@email.com</a> <br/>
                  <a href="mailto:company@email.com">company@email.com</a> <br/>
                  <a href="mailto:company@email.com">company@email.com</a> <br/>
                </p>

              </div>
            </div>

          </div>
          <div className="add-info">
            <div className="social-media">
              <h3 className="card-title">
                Social media:
              </h3>
              <FontAwesomeIcon size="2xl" icon={faFacebook} />
              <FontAwesomeIcon size="2xl" icon={faTwitter} />
              <FontAwesomeIcon size="2xl" icon={faInstagram} />
              <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
            </div>
            <div className="location">
              <h3 className="card-title">
                Location:
              </h3>
              <div>
                <p className="highlight">Chicago St. N278 </p>
              </div>
            </div>
          </div>
          <div className="footer-logo">
            <img src={logoStyled2} alt='Little lemon logo' />
            <div className="logo-text">
              <h1 className='title'>Little Lemon</h1>
              <h2 className='sub-title'>Chikago</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
