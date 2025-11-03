import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Albums from './components/Albums'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Booknow from './components/Booknow';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

// Create a ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/services' element={<Services />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booknow' element={<Booknow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;