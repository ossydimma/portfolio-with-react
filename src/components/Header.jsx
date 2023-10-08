import React, { useState } from 'react'

const Header = () => {
    const [drop, setDrop] = useState('60px')
    const nav = document.querySelector('.navi')
    
    function dropDown() {
        
        document.querySelector('.btn').addEventListener('click', () => {    
            setDrop('250px')
            nav.style.display = "flex"
            if (drop == '250px') {
                setDrop('60px')
                nav.style.display = "none"
            }
        })
    }
   
  return (
    <div  className="head">
        <div id='menu'>
            <div>
                <h2>Dwater.CO</h2>
            </div>
            <div id="menuContent" style={{height: drop}}>
                <div id="bar" >
                    <button className='btn' onClick={dropDown}>MENU <i className="fa-solid fa-bars"></i></button>    
                </div>
                <nav className='navi'>                 
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
                </nav>
            </div>
    
                
            
            
        </div>
        <div id="header__body">
            <div className='container'>
                <h1>web Developer</h1>
                <p>Hi, I am Dwater, focusing on creating emotional experiences.</p>
            </div>
        </div>
    </div>
  )
}

export default Header