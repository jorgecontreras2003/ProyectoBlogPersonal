import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <div className='nav-logo'>
          <h1 className='nav-nombre'><a href='/'>JC BLOG</a></h1>
        </div>

        <div className='nav-search'>
          <img src='https://img.icons8.com/ios/50/000000/search--v1.png' alt='search' />
          <input type='text' placeholder='Buscar...' />
        </div>

        <div className='nav-menu'>
          <ul>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Portafolio</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
