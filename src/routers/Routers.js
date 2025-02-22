import React from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarDetails from '../pages/CarDetails';
import CarListing from '../pages/CarListing';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cars' element={<CarListing/>}/>
        <Route path='/cars/:slug' element={<CarDetails/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/blogs/:slug' element={<BlogDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
    </div>
  );
}

export default Routers;
