import  { useState, useEffect } from 'react'

const Header = () => {
    const [drop, setDrop] = useState('60px')
    const [toggle, setToggle] = useState(false)
    
    
    
    function toggleDown() {
        setDrop('250px')
        setToggle(true)
        if (drop === "250px") {
            setDrop('60px')
            setToggle(false)
        }
    }
    const myStyles = {
        background : 'url("https://preview.colorlib.com/theme/jackco/assets/img/gallery/section-bg.jpg")',
        width : '100vw',
        height : '100vh',
        overflow: 'hidden',
    }
   
  return (
    <div  className="head">
        <div id='menu'>
            <div>
                <h2>Dwater.CO</h2>
            </div>
            <div id="menuContent" style={{height: drop}}>
                <div id="bar" >
                    <button className='btn' onClick={toggleDown}>MENU <i className="fa-solid fa-bars"></i></button>    
                </div>
                {toggle && <nav className='navi'>                 
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Blog
                        <ul  id="submenu">
                            <li>Blog</li>
                            <li>Blog Details</li>
                            <li>Element</li>
                        </ul>
                    </a>
                    <a href="/">Contact</a>   
                    <a href="/">Send me an Email</a>
                </nav> }
            </div>
    
                
            
            
        </div>
        <div id="header__body">
            <div className='container'>
                <h1>web Developer</h1>
                <p>Hi, I am Dwater, focusing on creating emotional experiences.</p>
            </div>
        </div>
        <div className='hire' >
            <a href="/" className="hireBtn">HIRE ME</a>
        </div>
    </div>
  )
}

export default Header
