import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="head">
      <div id="header__body">
        <div className="header-img">
          <img src="/public/mypic.jpg" alt="image" />
        </div>
        <div className="container">
          <h1>web Developer</h1>
          <p>Hi, I am Dwater, focusing on creating emotional experiences.</p>
        </div>
      </div>
        <div className="hire">
          <a href="/" className="hireBtn">
            HIRE ME
          </a>
        </div>
    </div> //head
  );
};

export default Header;
