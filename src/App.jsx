import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './page/Product/Product';
import Pricing from './page/Pricing/Pricing'
import Company from './page/Company/Company';
import Blog from './page/Blog/Blog';
import Contact from './page/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/Company" element={<Company />}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
