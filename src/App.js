
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          {/* <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} /> */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
