import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Navigation from './pages/Navigation';
import { Layout } from './pages/styles';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';



const App = () => {
  
  return(
    <div className='App'>
      <Navigation />
      <Layout>
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="skills" element={<Skills />}/>
            <Route path="portfolio" element={<Portfolio />}/>
            <Route path="*" element={<NoPage />} />  
        </Routes>
      </Layout>
      
    </div>
  )
}

export default App;
