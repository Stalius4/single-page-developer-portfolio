import "../styles/footer.css"
import gitLogo  from "../assets/images/icon-github.svg"
import frontMentorLogo from "../assets/images/icon-frontend-mentor.svg"
import linkedInLogo from "../assets/images/icon-linkedin.svg"
import twitter from "../assets/images/icon-twitter.svg"
import photo from "../assets/images/image-profile-desktop.webp"
import circle from "../assets/images/pattern-circle.svg"
import rings from "../assets/images/pattern-rings.svg"

function Footer(){



    return(
        <div className="footer">
           <div className="footer__inner">
            <div className="footer__description">
                <h1 className="heading-XL">Contact</h1>
                <p className="text-L">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
                <form className="footer__form">
                <section className="form__section">
                    <label for="name" className="form__title text-L">NAME</label>
                    <input type="text" name="name" id="name" className="form__input"></input>
                </section>
                <section className="form__section">
                    <label for="email" className="form__title text-L">EMAIL</label>
                    <input type="text" name="email" id="email" className="form__input"></input>
                </section>
                <section className="form__section">
                    <label for="message" className="form__title text-L">MESSAGE</label>
                    <textarea  name="message" id="message" rows={7} cols={40} className="form__input"></textarea>
                </section>
                <section class="submission">
                <button type="submit" class="button button--footer">SEND MESSAGE</button>
                     </section>
                </form>
                </div>
         <div className="line line--padding-top"></div>
         <nav className="profile__nav line--padding-top">
          <div className="name-logo">adamkeyes</div>
            <ul className="social-icons">
              <li><img className="logo" src={gitLogo} alt="GitHub"/></li>
              <li><img className="logo" src={frontMentorLogo} alt="Frontend Mentor"/></li>
              <li><img className="logo" src={linkedInLogo} alt="linkedIn"/></li>
              <li><img className="logo" src={twitter} alt="Twitter"/></li>
            </ul>
      </nav>



        </div>
    )
}


export default Footer