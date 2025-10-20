
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Header/>
        <Routes>
          {/* <Route path="/" element={
            <>
              <About />
              <Education />
              <Skills />
              <Card />
              <Resister />
            </>
          }
          /> */}
          {/* <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='' element={<Skills />} />
          <Route path='/resister' element={<Resister />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
