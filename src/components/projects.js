import "../styles/projects.css"
import project1 from "../assets/images/thumbnail-project-1-large.webp"
import project2 from "../assets/images/thumbnail-project-2-large.webp"
import project3 from "../assets/images/thumbnail-project-3-large.webp"
import project4 from "../assets/images/thumbnail-project-4-large.webp"
import project5 from "../assets/images/thumbnail-project-5-large.webp"
import project6 from "../assets/images/thumbnail-project-6-large.webp"
function Projects() {




    return (
    <section className="projects-outer">
        <section className="top-projects-contactMe">
          <h1>Projects</h1>
          <button >CONTACT ME</button>
        </section>
      <div class="project-cards">
        <div className="project-container">
          <img src={project1} alt="project1"/>
          <div className="project-name">DESIGN PORTFOLIO</div>
          <div className="project-languages">HTML CSS</div>
        </div>
        <div className="project-container">
          <img src={project2} alt="project2"/>
          <div className="project-name">E-LEARNING LANDING PAGE</div>
          <div className="project-languages">HTML CSS</div>
        </div>
        <div className="project-container">
          <img src={project3} alt="project3"/>
          <div className="project-name">TODO WEB APP</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>
        <div className="project-container">
          <img src={project4} alt="project4"/>
          <div className="project-name">ENTERTAINMENT WEB APP</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>
        <div className="project-container">
          <img src={project5} alt="project5"/>
          <div className="project-name">MEMORY GAME</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>
        <div className="project-container">
          <img src={project6} alt="project6"/>
          <div className="project-name">ART GALLERY SHOWCASE</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>                                        
      </div>

  </section>
      
    );
  }
  
  export default Projects;
  