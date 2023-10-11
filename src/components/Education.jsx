import React from 'react'

const Education = () => {
  return (
    <div>
        <div className="experiences">
            <div>
                <h2 className='experienceTitle'>Education</h2>
            </div>

            <div className="experience">
                <div>
                    <h2>Html</h2>
                </div>
                <div className='experience_flex'>
                    <p>March 2020 - Present</p>
                    <p>at<a href="/" className='outLink'> Danlian University  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>

            <div className="experience edu">
                <div>
                    <h2>CSS</h2>
                </div>
                <div className='experience_flex'>
                    <p>March 2020 - Present</p>
                    <p>at<a href="/" className='outLink'> School of California  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education