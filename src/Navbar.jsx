import './Navbar.scss'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>

        <div className='nav-logo'>
          <h1 className='nav-nombre'>JC BLOG</h1>
        </div>

        <div className='nav-search'>
          <img src='https://img.icons8.com/ios/50/000000/search--v1.png' alt='search' />
          <input type='text' placeholder='Buscar...' />
        </div>

        <div className='nav-menu'>
          <ul>
            <li> <Link to="/"><a href='#'>Blog</a></Link> </li> 
            <li> <Link to="/portafolio"><a href='#'>Portafolio</a></Link> </li>
            <li> <Link to="/contacto"><a href='#'>Contacto</a></Link> </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
