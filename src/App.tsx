import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Series from './pages/Series';
import Filmes from './pages/Filmes';
import MinhaLista from './pages/MinhaLista';
import Profiles from './pages/Profiles';
import PageTransition from './components/PageTransition';
import { useUser } from './context/UserContext';
import './index.css';

function MainLayout({ children }: { children: React.ReactNode }) {
  const { activeProfile } = useUser();
  if (!activeProfile) {
    return <Navigate to="/profiles" />;
  }
  return (
    <div className="main-layout">
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/profiles" element={<PageTransition><Profiles /></PageTransition>} />
        <Route path="/" element={<MainLayout><PageTransition><Home /></PageTransition></MainLayout>} />
        <Route path="/series" element={<MainLayout><PageTransition><Series /></PageTransition></MainLayout>} />
        <Route path="/filmes" element={<MainLayout><PageTransition><Filmes /></PageTransition></MainLayout>} />
        <Route path="/minhalista" element={<MainLayout><PageTransition><MinhaLista /></PageTransition></MainLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
