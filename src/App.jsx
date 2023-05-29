import './styles.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
