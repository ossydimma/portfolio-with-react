import React from 'react'

const About = () => {
    
  return (
    <div>
        <div className= "aboutDiv" >
            <div className='aboutBox'>
              <div className="aboutContent" >
                <div>
                  <span >ABOUT MYSELF</span>
                </div>

                <div>
                  <h2>I’m a web developer based on Nigeria, who writes clean, simple & unique code. I also enjoy learning</h2>
                </div>

                <div>
                  <a href="/" style={{color: '#000'}}>DOWNLOAD RESUME</a>
                </div>
              </div>
              <div className='progress'>

                <div className="skills">
                  <div className="skill">
                    <p className="skill_name">HTML</p>
                  </div>
                  <div className="skills__bars" per= "60">
                    <div className="skill__per" style={{maxWidth : "90%"}}></div>
                  </div>
                </div>

                <div className="skills">
                  <div className="skill">
                    <p className="skill_name">CSS</p>
                  </div>
                  <div className="skills__bars">
                    <div className="skill__per" style={{maxWidth : "70%"}}></div>
                  </div>
                </div>

                <div className="skills">
                  <div className="skill">
                    <p className="skill_name">JAVASCRIPT</p>
                  </div>
                  <div className="skills__bars">
                    <div className="skill__per" style={{maxWidth : "60%"}}></div>
                  </div>
                </div>

                <div className="skills">
                  <div className="skill">
                    <p className="skill_name">REACT</p>
                  </div>
                  <div className="skills__bars">
                    <div className="skill__per" style={{maxWidth : "40%"}}></div>
                  </div>
                </div>

              </div>
              <div className="skill_text">
                <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
              </div>
            </div>
        </div>

        <div className="expertise">
          <div>
            <h2>My Expertise</h2>
          </div>
          <div className='expertiseCon'>
            <div className="expertises">
              <h2>Html</h2>
              <h2 style={{color: "rgba(21,3,3,0.3)"}}>Css</h2>
              <h2 style={{color: "rgba(21,3,3,0.3)"}}>Javascript</h2>
            </div>
            <div>
              <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
              <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About