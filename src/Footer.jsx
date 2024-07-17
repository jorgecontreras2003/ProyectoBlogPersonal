import './Footer.scss'

function Footer() {
  return (
    <>
      <footer>

        <div className='foot-main'>
          <h1 className='foot-nombre'><a href='/'>JC BLOG</a></h1>
          <h3 className='foot-copy'>© 2024 JC Blog. Todos los derechos reservados.</h3>
          <h2 className='foot-credits'>Diseñado por <strong>Jorge Contreras</strong></h2>
        </div>

        <div className='foot-social'>

            <div className='part-a'>
                <a href='https://www.facebook.com/'><img src='https://img.icons8.com/ios/50/FFFFFF/facebook-new.png' alt='facebook' /></a>
                <a href='https://www.instagram.com/'><img src='https://img.icons8.com/ios/50/FFFFFF/instagram-new.png' alt='instagram' /></a>
            </div>

            <div className='part-b'>
                <a href='https://www.twitter.com/'><img src='https://img.icons8.com/ios/50/FFFFFF/twitter--v1.png' alt='twitter' /></a>
                <a href='https://www.linkedin.com/'><img src='https://img.icons8.com/ios/50/FFFFFF/linkedin.png' alt='linkedin' /></a>
            </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
