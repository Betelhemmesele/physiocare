import './App.css';
import Header from '../src/components/Header'; // Import the Header component
import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs'; // Import the About Us component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import  ServicesPage from '../src/pages/Services'
import Footer from './components/Footer';
import PatientInfo from '../src/pages/PatientInfo';
import TestimonialPage from '../src/pages/Testimonial';
import ContactUsPage from '../src/pages/ContactUs';
import FaqSection from './pages/Faqs';
import NotFound from '../src/pages/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Include Header component */}
        <Header />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
          <Route path="/services" element={< ServicesPage />} /> {/* Services route */}
          <Route path="/testimonials" element={< TestimonialPage />} />
          <Route path="/contact-us" element={< ContactUsPage />} />
          <Route path="/patient-info" element={<PatientInfo />} />
           <Route path="/faqs" element={< FaqSection />} />
           <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
