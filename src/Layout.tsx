import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './ui/navbar';
import './i18n/i18n';
import { Hero } from './pages/Hero';
import {Footer} from './ui/footer'

function Home() {
  return (
    <Router>
      <div className="home-page">
        <Navbar />
        <Hero/>
        <Footer/>
      </div>
    </Router>
  );
}

export default Home;
