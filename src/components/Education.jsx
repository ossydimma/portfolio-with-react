import { useEffect, useState } from 'react'

const Education = () => {
    const [show, setShow] = useState(false)
    function displayLink(e) {
     e.targert.setShow(true)
    }
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
                    <p>at<a href="/" className='outLink'> Danlian University  <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
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
                    <p>at<a href="/" className='outLink'> School of California  <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>
                </div>
                <div>
                    <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</p>
                </div>
            </div>
        </div>
        <div className="posts">
           <div className="postflex">

                <div className="post">
                    <img onMouseOver={displayLink} src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg" alt="post" />
                   {show && <div className="imgLink 1">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> }
                </div>

                <div className="post" >
                    <img onMouseEnter={displayLink} src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg" alt="post" />
                    {show && <div className="imgLink 2">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> }    
                </div>

                <div className="post">
                    <img onMouseEnter={displayLink} src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg" alt="post" />
                    {show && <div className="imgLink 3">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery3.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> }  
                </div>

                <div className="post">
                    <img onMouseEnter={displayLink} src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery4.jpg" alt="post" />
                    {show && <div className="imgLink 4">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery4.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> }
                </div>

                <div className="post" >
                    <img onMouseEnter={displayLink} src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg" alt="post" />
                    {show && <div className="imgLink 5">
                        <a href="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery2.jpg"><i className="fa-solid fa-magnifying-glass-plus"></i></a>
                    </div> } 
                </div>
            </div>

        </div>


    </div>
  )
}

export default Education