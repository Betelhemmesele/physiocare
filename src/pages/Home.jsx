
import { useEffect,} from 'react';
import {
  FaUserMd,
  FaHandsHelping,
  FaStethoscope,
  FaUserFriends,
  FaHeartbeat,
  FaCalendarCheck,
  FaFileMedical,
  FaStar,
  FaEnvelope
} from 'react-icons/fa';
import { motion } from "framer-motion";
import CardSection from '../components/Contactcard';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/homeService';
import './HomePage.css';
import abstract from '../assets/abstract.webp';
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5 // Delay after image appears
    }
  }
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const windowHeight = window.innerHeight;
      const windowScroll = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + windowScroll;
        // Adjust the condition to trigger visibility
        if (windowScroll + windowHeight > sectionTop + 100) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
  <div
    className="hero-section relative flex items-center justify-center min-h-screen bg-cover bg-center"
  >
  <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-10"></div>
<div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
  <div className="flex flex-col md:flex-row md:items-start">
    {/* Left Section */}
    <motion.div 
      className="flex flex-col justify-center text-left text-white w-full md:w-1/2 space-y-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        variants={itemVariantsLeft}
      >
        Welcome to PhysioDev NY – Your Path to Recovery Starts Here
      </motion.h1>
      
      <motion.h2 
        className="text-base sm:text-lg md:text-xl lg:text-2xl"
        variants={itemVariantsLeft}
      >
        Expert Physical Therapy and Chiropractic Care in Baldwin, NY
      </motion.h2>
     
      {/* Subheading */}
      <motion.ul 
        className="text-base sm:text-lg md:text-xl lg:text-2xl list-disc pl-5"
        variants={itemVariantsLeft}
      >
        <motion.li variants={itemVariantsLeft}>Personalized, evidence-based care</motion.li>
        <motion.li variants={itemVariantsLeft}>Specializing in auto injuries & work-related conditions</motion.li>
        <motion.li variants={itemVariantsLeft}>Convenient location in Baldwin, NY</motion.li>
      </motion.ul>
      
      {/* Buttons - coming from right */}
      <motion.div 
        className="md:mt-4 flex flex-col sm:flex-row sm:justify-start"
        variants={containerVariants}
      >
        <motion.div variants={itemVariantsRight}>
          <Link to="/contact-us">
            <motion.button 
              className="w-48 bg-blue-600 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-blue-500 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-opacity-70"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
        
       
        
        <motion.div variants={itemVariantsRight}>
          <Link 
            to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button 
              className="mt-4 sm:mt-0 sm:ml-2 w-48 bg-blue-600 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-blue-500 transition duration-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-opacity-70 gap-2"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Zoho Mail</span>
              <FaEnvelope className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</div>
</div>



      {/* Scrollable sections */}
      <div className="bg-white">
<section className="bg-gray-100 py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
    
    {/* Image on one half */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://hoganchiropractic.com/wp-content/uploads/2020/11/injured-patient-in-a-leg-brace-exercising-on-a-blu-AEF9RF8-scaled-e1604610327827.jpg.webp"
        alt="Physical Therapy and Chiropractic Care"
        className="w-full h-auto rounded-full md:rounded-lg shadow-md"
      />
    </div>
    
    {/* Text content on the other half */}
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Physical Therapy and Chiropractic Care</h2>
      
      <p className="text-lg text-gray-700">
  At PhysioDev NY, we help individuals of all ages recover from injuries, manage chronic pain, and improve mobility through personalized physical therapy and chiropractic care. Your health and wellness are our top priority.
</p>

     
      {/* Button that navigates to the 'About Us' page */}
      <a 
        href="/about-us" 
        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-200"
      >
        Learn about Our Company
      </a>
    </div>
  </div>
</section>



<section className="bg-gray-100 section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20" aria-labelledby="services-header">
  <div className="container mx-auto max-w-6xl px-4 md:px-2">
    <h2 id="services-header" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
   

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Worker’s Compensation Rehab */}
      <article className="service-card">
        <ServiceCard 
           image="https://media.istockphoto.com/id/1132546141/photo/occupational-therapist-holding-leg-and-foot-of-patient.jpg?s=612x612&w=0&k=20&c=0pI7H-yuAjMp7B9_lYOu4uF4GsdTkuJEbYJVPcr6xRw="
          title="Worker’s Compensation Rehab"
          description="Personalized therapy programs to help injured workers recover safely, return to work confidently, and navigate the workers’ comp process."
          link="/services"
          alt="Rehabilitation for workplace injuries"
        />
      </article>

      {/* Motor Vehicle Accident Recovery */}
      <article className="service-card">
        <ServiceCard 
          image="https://coastalphysiotherapy.in/images/Motorvehicleaccidentinjuries.jpg"
          title="Motor Vehicle Accident Recovery"
          description="Targeted treatments for whiplash, back pain, and joint trauma from car accidents. We assist with insurance documentation and care continuity."
          link="/services"
          alt="Recovery services after car accidents"
        />
      </article>

      {/* Pain Management */}
      <article className="service-card">
        <ServiceCard 
          image="https://elitepainandspine.com/wp-content/uploads/2024/02/EPSI-Trigger-Point-Injections.png"
          title="Pain Management"
          description="Non-invasive therapies to manage chronic pain from arthritis, sciatica, migraines, and more — focusing on function and reducing medication use."
          link="/services"
          alt="Chronic pain management"
        />
      </article>

      {/* Physical Therapy */}
      <article className="service-card">
        <ServiceCard 
          image="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2779078.jpeg"
          title="Physical Therapy"
          description="Evidence-based rehab for orthopedic, neurological, and post-surgical conditions, restoring strength, balance, and flexibility."
          link="/services"
          alt="Physical therapy services"
        />
      </article>

    </div>
  </div>
</section>

<section className="section background-image-section section1 py-40">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        
      ></div>

<div className="container mx-auto max-w-6xl px-4 md:px-2 relative z-10">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
    Why Choose PhysioDev NY?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {/* Icon 1 */}
    <div className="flex flex-col items-center">
      <FaUserMd className="icon" /> {/* Healthcare Professional Icon */}
      <h3 className="text-xl font-semibold text-white">Licensed Experts</h3>
    </div>

    {/* Icon 2 */}
    <div className="flex flex-col items-center">
      <FaHandsHelping className="icon" /> {/* Helping Hands Icon */}
      <h3 className="text-xl font-semibold text-white">Compassionate Care</h3>
    </div>

    {/* Icon 3 */}
    <div className="flex flex-col items-center">
      <FaStethoscope className="icon" /> {/* Stethoscope Icon */}
      <h3 className="text-xl font-semibold text-white">Evidence-Based Therapy</h3>
    </div>

    {/* Icon 4 */}
    <div className="flex flex-col items-center">
      <FaUserFriends className="icon" /> {/* Team/Group Icon */}
      <h3 className="text-xl font-semibold text-white">Personalized Treatment</h3>
    </div>

    {/* Icon 5 */}
    <div className="flex flex-col items-center">
      <FaHeartbeat className="icon" /> {/* Heartbeat Icon */}
      <h3 className="text-xl font-semibold text-white">Whole-Body Healing</h3>
    </div>

    {/* Icon 6 */}
    <div className="flex flex-col items-center">
      <FaCalendarCheck className="icon" /> {/* Calendar Check Icon */}
      <h3 className="text-xl font-semibold text-white">Flexible Scheduling</h3>
    </div>

    {/* Icon 7 */}
    <div className="flex flex-col items-center">
      <FaFileMedical className="icon" /> {/* Medical File Icon */}
      <h3 className="text-xl font-semibold text-white">Insurance Assistance</h3>
    </div>

    {/* Icon 8 */}
    <div className="flex flex-col items-center">
      <FaStar className="icon" /> {/* Star/Quality Icon */}
      <h3 className="text-xl font-semibold text-white">Trusted by the Community</h3>
    </div>
  </div>
</div>

    </section>
    <section className="bg-white py-16">
  <div className="container mx-auto max-w-6xl px-4 md:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">First Time Visiting?</h2>
    <p className="text-gray-700 text-lg mb-6">
      We’ve got everything you need to know—what to bring, insurance info, and how to make your visit smooth and stress-free.
    </p>
    <Link to="/patient-info">
      <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-200">
        Patient Info
      </button>
    </Link>
  </div>
</section>

    <section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20 bg-gray-100">
  <div className="container mx-auto max-w-6xl px-4 md:px-8">
    <div className="flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2">
        <img 
          src="https://t3.ftcdn.net/jpg/07/01/76/46/360_F_701764615_Vhtkv7zMzWkY52kdG9RxkDflnVeG8CR4.jpg" 
          alt="Testimonial" 
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
     
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-gray-700 mb-6 ml-2">
          "After my car accident, I could barely move my neck. The team at PhysioDev not only helped me recover but also explained every step of the treatment. I’m pain-free and finally sleeping well again!"
        </p>
        <p className="text-gray-700 mb-8 italic">- Danielle S., Freeport, NY</p>
        
        <a 
          href="/testimonials" // Link to the testimonial page
          className="bg-blue-700 text-white py-3 px-6 rounded-lg mt-10 hover:bg-blue-600 transition duration-200"
        >
          See Reviews
        </a>
      </div>
      
 
     
    </div>
  </div>
</section>


<CardSection
  backgroundImage={abstract}
  heading="Ready to Begin Your Healing Journey?"
  content="Scheduling your session with PhysioDev NY is simple and stress-free. Whether you need a one-time consultation or ongoing treatment, our team is here to support your recovery every step of the way."
  buttonText="Book an Appointment"
  buttonLink="/contact-us"
/>

      </div>

    </div>
  );
};

export default Home;
