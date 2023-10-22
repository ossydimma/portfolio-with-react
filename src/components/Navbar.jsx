import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [drop, setDrop] = useState('60px')
    const [toggle, setToggle] = useState(window.innerWidth > 992 ? true : false)
    
    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            window.innerWidth > 992 ?  setToggle(true):  setToggle(false)
            setDrop('60px')
        })
    },[])
    
    function toggleDown() {
        setDrop('250px')
        setToggle(true)
        if (drop === "250px") {
            setDrop('60px')
            setToggle(false)
        }
    }
  return (
    <>
        <div id='menu'>
            <div>
                <h2>Dwater.CO</h2>
            </div>
            <div id="menuContent" style={{height: drop}}>
                <div id="bar" >
                    <button className='btn' onClick={toggleDown}>MENU <i className="fa-solid fa-bars"></i></button>    
                </div>
                {toggle && <nav className='navi'>                 
                    <Link to="/">Home</Link>
                    <Link to="/AboutMe">About</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/">Blog
                        <ul  id="submenu">
                            <li>Blog</li>
                            <li>Blog Details</li>
                            <li>Element</li>
                        </ul>
                    </Link>
                    <Link to="/Contacts">Contact</Link>   
                    <Link to="/Contacts">Send me an Email</Link>
                </nav> }
            </div>
        </div>
    </>
  )
}

export default Navbar