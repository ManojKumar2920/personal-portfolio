import { useState } from 'react';
import '../index.css'
import { RiMenuLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';

const NavBar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return(
        <nav>
        <div className='container'>
          <div className="left">
            <a href="/"><h1>mano<span>.dev</span></h1></a>
          </div>
          <div className="right">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <MdClose /> : <RiMenuLine />}
          </div>

        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><a href="/" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
              <li><a href="#conatact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    );
}

export default NavBar;