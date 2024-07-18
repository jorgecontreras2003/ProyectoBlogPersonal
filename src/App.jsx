import Navbar from './Navbar'
import Home from './Home'
import Blog from './Blog'
import Footer from './Footer'
import Post from './Post'
import ScrollTop from './ScrollTop'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/publicacion1' element={<Post />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
