import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
// import EmployeePortal from './pages/EmployeePortal'; // Comentei essa linha para desativar o portal do funcionário
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FixedSidebar from './components/FixedSidebar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          {/* <Route path="/employee-portal" element={<EmployeePortal />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FixedSidebar />
      </div>
      <Footer />
    </Router>
  );
}
