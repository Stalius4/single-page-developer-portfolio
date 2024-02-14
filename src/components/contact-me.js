
import "../styles/contact-me.css"
import gitLogo  from "../assets/images/icon-github.svg"
import frontMentorLogo from "../assets/images/icon-frontend-mentor.svg"
import linkedInLogo from "../assets/images/icon-linkedin.svg"
import twitter from "../assets/images/icon-twitter.svg"
import photo from "../assets/images/image-profile-desktop.webp"
import circle from "../assets/images/pattern-circle.svg"
import rings from "../assets/images/pattern-rings.svg"
function ContactMe() {
  return (
    <div className="contactMe">
<nav className="nav-logo">
  <div className="name-logo">adamkeyes</div>
  <ul className="icons">
     <li> <img className="logo" src={gitLogo} alt="GitHub logo"/></li>
     <li>  <img className="logo" src={frontMentorLogo} alt="Frontend Mentor logo"/></li>
     <li>  <img className="logo" src={linkedInLogo} alt="linkedIn"/></li>
     <li>  <img className="logo" src={twitter} alt="Twitter logo"/></li>
  </ul>
</nav>
<div className="hero">
<section className="left-description">
  <h1>Nice to meet you!<br></br>I'm <span className="underline">Adam Keyes.</span></h1>
  <p className="description">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
  <p className="contact">CONTACT ME</p>
<img className="circle" src={circle} alt="circle"/>
</section>


  <img  className="portrait" src={photo} alt="portrait"/>
</div>
  <img src={rings} className="rings" alt="Profile picture"/>
</div>
    
  );
}

export default ContactMe;
