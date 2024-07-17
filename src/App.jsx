import Navbar from './Navbar'
import Home from './Home'
import Blog from './Blog'
import Footer from './Footer'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
