import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';



const App = () => {
  
  return(
    <div className='App'>
      <Navigation />
      <Routes>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<NoPage />} />  
      </Routes>
    </div>
  )
}

export default App;
