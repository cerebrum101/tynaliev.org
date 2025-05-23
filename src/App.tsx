import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './ui/navbar';
import { Footer } from './ui/footer';
import { Hero } from './pages/Hero';
import { Biography } from './pages/Biography';
import { Contact } from './pages/Contact';
import { Collection } from './pages/Collection';
import { NotFound } from './pages/NotFound';
import { Legal } from './pages/Legal';
import './i18n/i18n';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 