import Navbar from "./Navbar"



const Header = () => {
  return (
    <div  className="head">
      <div id="header__body">
        <div className="header-img">
          <img src="/src/assets/mine.jpg" alt="image" />
        </div>
          <div className='container'>
              <h1>web Engineer</h1>
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
