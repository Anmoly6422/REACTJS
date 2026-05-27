import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import NotFound from './pages/notfound'
import Courses from './pages/courses'
import Coursedetail from './pages/coursedetail'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
         <Route path='/product' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:id' element={<Coursedetail/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
