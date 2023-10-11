import React from 'react'

const Expertises = () => {
  return (
    <div>
        <div className="expertise">
            <div>
                <h1>My Expertise</h1>
            </div>
            <div className='expertiseCon'>
                
                <div className="expertises">
                    <h2>Html</h2>
                    <h2 style={{ color: "rgba(21,3,3,0.3)" }}>Css</h2>
                    <h2 style={{ color: "rgba(21,3,3,0.3)" }}>Javascript</h2>
                </div>
            
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
                
            </div>
            
        </div>
        <div className="experiences">
            <div>
                <h2 className='experienceTitle'>Experience</h2>
            </div>

            <div className="experience">
                <div>
                    <h2>Html</h2>
                </div>
                <div className='experience_flex'>
                    <p>March 2020 - Present</p>
                    <p>at<a href="/" className='outLink'> Colorlib  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>

            <div className="experience">
                <div>
                    <h2>CSS</h2>
                </div>
                <div className='experience_flex'>
                    <p>March 2020 - Present</p>
                    <p>at<a href="/" className='outLink'> Colorlib  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>

            <div className="experience">
                <div>
                    <h2>Javascript</h2>
                </div>
                <div className='experience_flex'>
                    <p>March 2020 - Present</p>
                    <p>at<a href="/" className='outLink'> Colorlib  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>

            <div className="experience">
                <div>
                    <h2>react</h2>
                </div>
                <div className='experience_flex'>
                    <p>March 2020 - Present</p>
                    <p>at<a href="/" className='outLink'> Colorlib  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>
        </div>
        <div className="visit">
            <div className='visit-con'>
                <div className='visit-img'></div>
                <div>
                    <p>"I help creative entrepreneurs build better businesses, maximize productivity, and cultivate an engaged community.</p>
                </div>
            </div>
              
        </div>
        
    </div>
  )
}

export default Expertises