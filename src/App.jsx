import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Programs from '@/pages/Programs.jsx';
import Team from '@/pages/Team.jsx';
import Donate from '@/pages/Donate.jsx';
import Petition from '@/pages/Petition.jsx';
import Updates from '@/pages/Updates.jsx';
import Contact from '@/pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/petition" element={<Petition />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;