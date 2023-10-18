import React, { useEffect, useState } from 'react'


const Insta = () => {
    const [show, setShow] = useState(true)

    function displayLink(e) {
     
    }
  return (
    <>
    <div className="posts">
           <div className="postflex">

                <div className="post">
                    <img  src="https://preview.colorlib.com/theme/jackco/assets/img/gallery/gallery1.jpg" alt="post" /> 
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

    </>
  )
}

export default Insta