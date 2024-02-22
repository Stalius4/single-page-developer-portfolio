import "../styles/projects.css"
import project1 from "../assets/images/thumbnail-project-1-large.webp"
import project2 from "../assets/images/thumbnail-project-2-large.webp"
import project3 from "../assets/images/thumbnail-project-3-large.webp"
import project4 from "../assets/images/thumbnail-project-4-large.webp"
import project5 from "../assets/images/thumbnail-project-5-large.webp"
import project6 from "../assets/images/thumbnail-project-6-large.webp"
import React, { useState , useEffect} from 'react';
function Projects() {
  const [isHovered, setIsHovered] = useState({
    project1:false,
    project2:false,
    project3:false,
    project4:false,
    project5:false,
    project6:false
  });

  const handleMouseOver = (e) => {
    setIsHovered({...isHovered, [`project${e}`]: true});
  };

  const handleMouseOut = (e) => {
   
      setIsHovered({...isHovered, [`project${e}`]: false})
    
  };


  // change everything to false when scrolling mouse
  useEffect(() => {
    const handleScroll = () => {
      setIsHovered({
        project1: false,
        project2: false,
        project3: false,
        project4: false,
        project5: false,
        project6: false
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



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
          <img src={project1} alt="project1" onMouseOver={(e)=>handleMouseOver(1)} className="project-img"/>
          <div className="project-name">DESIGN PORTFOLIO</div>
          <div className="project-languages">HTML CSS</div>

          {/* hidden  content/////   on mouse out display none this div */}
          <div className={isHovered.project1? "show-content-outer": "hide-content-outer"} onMouseOut={(e)=>handleMouseOut(1)} >
            <div className="hidden-content-inner" onMouseOver={(e)=>handleMouseOver(1)}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={project2} alt="project2" onMouseOver={(e)=>handleMouseOver(2)} className="project-img"/>
          <div className="project-name">E-LEARNING LANDING PAGE</div>
          <div className="project-languages">HTML CSS</div>


          <div className={isHovered.project2? "show-content-outer": "hide-content-outer"} onMouseOut={(e)=>handleMouseOut(2)} >
            <div className="hidden-content-inner" onMouseOver={(e)=>handleMouseOver(2)}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={project3} alt="project3" onMouseOver={(e)=>handleMouseOver(3)} className="project-img"/>
          <div className="project-name">TODO WEB APP</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
          <div className={isHovered.project3? "show-content-outer": "hide-content-outer"} onMouseOut={(e)=>handleMouseOut(3)} >
            <div className="hidden-content-inner" onMouseOver={(e)=>handleMouseOver(3)}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={project4} alt="project4" onMouseOver={(e)=>handleMouseOver(4)} className="project-img"/>
          <div className="project-name">ENTERTAINMENT WEB APP</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
          <div className={isHovered.project4? "show-content-outer": "hide-content-outer"} onMouseOut={(e)=>handleMouseOut(4)} >
            <div className="hidden-content-inner" onMouseOver={(e)=>handleMouseOver(4)}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={project5} alt="project5" onMouseOver={(e)=>handleMouseOver(5)} className="project-img"/>
          <div className="project-name">MEMORY GAME</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
          <div className={isHovered.project5? "show-content-outer": "hide-content-outer"} onMouseOut={(e)=>handleMouseOut(5)} >
            <div className="hidden-content-inner" onMouseOver={(e)=>handleMouseOver(5)}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={project6} alt="project6" onMouseOver={(e)=>handleMouseOver(6)} className="project-img"/>
          <div className="project-name">ART GALLERY SHOWCASE</div>
          <div className="project-languages">HTML CSS JAVASCRIPT</div>
          <div className={isHovered.project6? "show-content-outer": "hide-content-outer"} onMouseOut={(e)=>handleMouseOut(6)} >
            <div className="hidden-content-inner" onMouseOver={(e)=>handleMouseOver(6)}>
              <button className="view-project-btn" >VIEW PROJECT</button>
              <button className="view-code-btn">VIEW CODE</button>
            </div>
          </div>
        </div>                                        
      </div>

  </section>
      
    );
  }
  
  export default Projects;
  