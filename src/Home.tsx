import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './ui/navbar';
import { Footer } from './ui/footer';
import './i18n/i18n';
import { Hero } from './pages/Hero';

function Home() {
  return (
    <Router>
      <div className="home-page min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero/>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Home; 