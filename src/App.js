import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home/HomePage';
import { About } from './components/pages/About/About';
import Authors from './components/pages/authors/Authors';
import { Cart } from './components/pages/cart/Cart';
import { Login } from './components/pages/forms/Login';
import { Register } from './components/pages/forms/Register';
import Contact from './components/pages/contact/Contact';
import { Book } from './components/pages/book/Book';
function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<About />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book/:id' element={<Book />} />
        {/* :id هذا باراميتر, رقم الآي دي  */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
