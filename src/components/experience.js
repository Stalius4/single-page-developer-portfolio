import "../styles/experience.css"
import rings from "../assets/images/pattern-rings.svg"

function Experience() {




    return (
    <div className="experience-outer">
        <div className="name-year-box">
            <h2 className="exp-name">HTML</h2>
            <p>4 Years Experience</p>
        </div>
        <div className="name-year-box">
            <h2 className="exp-name">CSS</h2>
            <p>4 Years Experience</p>
        </div>
        <div className="name-year-box">
            <h2 className="exp-name">Javascript</h2>
            <p>4 Years Experience</p>
        </div>
        <div className="name-year-box">
            <h2 className="exp-name">Accessibility</h2>
            <p>4 Years Experience</p>
        </div>
        <div className="name-year-box">
            <h2 className="exp-name">React</h2>
            <p>3 Years Experience</p>
        </div>
        <div className="name-year-box">
            <h2 className="exp-name">Sass</h2>
            <p>3 Years Experience</p>
        </div>
        <img src={rings} className="exp-ring-patern" alt="Ring Pattern" />
  </div>
      
    );
  }
  
  export default Experience;
  