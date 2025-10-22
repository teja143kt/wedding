
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import Aboutus from './components/Aboutus';
import Services from './components/Services'; 
// import Albums from './components/Albums'
import Footer from './components/Footer';
// import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* <Route path='/aboutus' element={<Aboutus />} /> */}
          <Route path='/services' element={<Services/>}/>
          // <Route path='/albums' element={<Albums/>}/>
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
