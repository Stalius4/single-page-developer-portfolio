import "../styles/projects.css"
import project1 from "../assets/images/thumbnail-project-1-large.webp"
import project2 from "../assets/images/thumbnail-project-2-large.webp"
import project3 from "../assets/images/thumbnail-project-3-large.webp"
import project4 from "../assets/images/thumbnail-project-4-large.webp"
import project5 from "../assets/images/thumbnail-project-5-large.webp"
import project6 from "../assets/images/thumbnail-project-6-large.webp"
import React, { useState } from 'react';
function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    console.log(isHovered)
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    console.log(isHovered)
  };



    return (
    <section className="projects-outer" >
        <section className="top-projects-contactMe"     
>
          <h1>Projects</h1>
          <button >CONTACT ME</button>
        </section>
      <div className="project-cards">
        <div className="project-container">

        {/* on mouse over display hidden content */}
          <img src={project1} alt="project1" onMouseOver={handleMouseOver} className="project-container-img"
      />
          <div className="project-name">DESIGN PORTFOLIO</div>
          <div className="project-languages">HTML CSS</div>

          {/* hidden  content/////   on mouse out display none this div */}
          <div className={isHovered? "show-content-inner": "hidden-content-outer"} onMouseOut={handleMouseOut} >
            <div className="hidden-content-inner" onMouseOver={handleMouseOver}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={project2} alt="project2" className="project-container-img"/>
          <div className="project-name">E-LEARNING LANDING PAGE</div>
          <div className="project-languages">HTML CSS</div>
          
        </div>
        <div className="project-container">
          <img src={project3} alt="project3"  className="project-container-img"/>
          <div className="project-name">TODO WEB APP</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>
        <div className="project-container">
          <img src={project4} alt="project4" className="project-container-img"/>
          <div className="project-name">ENTERTAINMENT WEB APP</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>
        <div className="project-container">
          <img src={project5} alt="project5" className="project-container-img"/>
          <div className="project-name">MEMORY GAME</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>
        <div className="project-container">
          <img src={project6} alt="project6" className="project-container-img"/>
          <div className="project-name">ART GALLERY SHOWCASE</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
        </div>                                        
      </div>

  </section>
      
    );
  }
  
  export default Projects;
  