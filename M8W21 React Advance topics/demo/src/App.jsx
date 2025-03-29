import './App.css'
import {BrowserRouter, Route, Routes, Link} from 'react-router';
import About from './components/About';
import Product from './components/Product';
import Home from './components/Home';
import Products from './components/Products';
import ProductItem from './components/ProductItem';
import Styled from './components/Styled';
import Context from './components/context/Context';
import Ref from './components/Ref';
import Mat from './components/Mat';

function App() {
  

  return (
    <>
      {/* <h1>Do Not use a tags!</h1> */}

      {/* <a href="/product">Product</a>
      <br />
      <a href="/home">Home</a>
      <br /> */}
      
      <BrowserRouter>
      <h1>React Dom Link Tags</h1>
        <Link to="/home">Home </Link>
        <Link to="/product">Product </Link>
        <Routes>
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductItem />} />
          <Route path='/styled' element={<Styled />} />
          <Route path='/context' element={<Context />} />
          <Route path='/ref' element={<Ref />} />
          <Route path='/mat' element={<Mat />} />
          {/* <Route path='/products/1' element={<ProductItem />} />
          <Route path='/products/2' element={<ProductItem />} />
          <Route path='/products/3' element={<ProductItem />} />
          <Route path='/products/4' element={<ProductItem />} /> */}
        </Routes> 
      </BrowserRouter>
    </>

  )
}

export default App

/*
  app.get('/urls/:id)
  app.get('/urls/edit)
  app.get('/urls/new)
*/