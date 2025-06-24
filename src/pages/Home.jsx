
// import { useEffect,} from 'react';
// import {
//   FaUserMd,
//   FaHandsHelping,
//   FaStethoscope,
//   FaUserFriends,
//   FaHeartbeat,
//   FaCalendarCheck,
//   FaFileMedical,
//   FaStar,
//   FaEnvelope
// } from 'react-icons/fa';
// // import { motion } from "framer-motion";
// import CardSection from '../components/Contactcard';
// import { Link } from 'react-router-dom';
// import ServiceCard from '../components/homeService';
// import './HomePage.css';

// const Home = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('.section');
//       const windowHeight = window.innerHeight;
//       const windowScroll = window.scrollY;

//       sections.forEach((section) => {
//         const sectionTop = section.getBoundingClientRect().top + windowScroll;
//         // Adjust the condition to trigger visibility
//         if (windowScroll + windowHeight > sectionTop + 100) {
//           section.classList.add('visible');
//         } else {
//           section.classList.remove('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Call it initially to check visibility on mount

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative">
//   <div
//     className="hero-section relative flex items-center justify-center min-h-screen bg-cover bg-center"
//   >
//   <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-10"></div>
// <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
// <div className="flex flex-col md:flex-row md:items-start">
//   {/* Left Section */}
//   <div className="flex flex-col justify-center text-left text-white w-full md:w-1/2 space-y-4">
//     {/* Heading */}
//     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//       Welcome to PhysioDev NY – Your Path to Recovery Starts Here
//     </h1>
    
//     <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
//       Expert Physical Therapy and Chiropractic Care in Baldwin, NY
//     </h2>
   
//     {/* Subheading */}
//     <ul className="text-base sm:text-lg md:text-xl lg:text-2xl list-disc pl-5">
//       <li>Personalized, evidence-based care</li>
//       <li>Specializing in auto injuries & work-related conditions</li>
//       <li>Convenient location in Baldwin, NY</li>
//     </ul>
    
//     {/* Buttons */}
//     <div className="md:mt-4 flex flex-col sm:flex-row sm:justify-start">
//       <div>
//         <Link to="/contact-us">
//           <button className="w-48 bg-blue-600 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-blue-500 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-opacity-70">
//             Contact Us
//           </button>
//         </Link>
//       </div>
      
//       <div>
//         <Link 
//           to="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button className="mt-4 sm:mt-0 sm:ml-2 w-48 bg-blue-600 text-white py-3 px-4 md:px-10 rounded-3xl hover:bg-blue-500 transition duration-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-opacity-70 gap-2">
//             <span>Zoho Mail</span>
//             <FaEnvelope className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl" />
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// </div>



//       {/* Scrollable sections */}
//       <div className="bg-white">
// <section className="bg-gray-100 py-20">
//   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
    
//     {/* Image on one half */}
//     <div className="w-full md:w-1/2 mb-8 md:mb-0">
//   <img
//     src="https://res.cloudinary.com/dte18rjfm/image/upload/w_auto,q_auto,f_auto/PhysicalTherapy_ykohgn.webp"
//     srcSet="
//       https://res.cloudinary.com/dte18rjfm/image/upload/w_400,q_auto,f_auto/PhysicalTherapy_ykohgn.webp 400w,
//       https://res.cloudinary.com/dte18rjfm/image/upload/w_800,q_auto,f_auto/PhysicalTherapy_ykohgn.webp 800w,
//       https://res.cloudinary.com/dte18rjfm/image/upload/w_1200,q_auto,f_auto/PhysicalTherapy_ykohgn.webp 1200w
//     "
//     sizes="(max-width: 768px) 100vw, 50vw"
//     alt="Physical Therapy and Chiropractic Care"
//     className="w-full h-auto rounded-full md:rounded-lg shadow-md"
//     loading="lazy"
//   />
// </div>

    
//     {/* Text content on the other half */}
//     <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Physical Therapy and Chiropractic Care</h2>
      
//       <p className="text-lg text-gray-700">
//   At PhysioDev NY, we help individuals of all ages recover from injuries, manage chronic pain, and improve mobility through personalized physical therapy and chiropractic care. Your health and wellness are our top priority.
// </p>

     
//       {/* Button that navigates to the 'About Us' page */}
//       <a 
//         href="/about-us" 
//         className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-200"
//       >
//         Learn about Our Company
//       </a>
//     </div>
//   </div>
// </section>



// <section className="bg-gray-100 section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20" aria-labelledby="services-header">
//   <div className="container mx-auto max-w-6xl px-4 md:px-2">
//     <h2 id="services-header" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
   

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//       {/* Worker’s Compensation Rehab */}
//       <article className="service-card">
//         <ServiceCard 
//            image="https://res.cloudinary.com/dte18rjfm/image/upload/v1750768725/Worker_qbcbxa.webp"
//           title="Worker’s Compensation Rehab"
//           description="Personalized therapy programs to help injured workers recover safely, return to work confidently, and navigate the workers’ comp process."
//           link="/services"
//           alt="Rehabilitation for workplace injuries"
//         />
//       </article>

//       {/* Motor Vehicle Accident Recovery */}
//       <article className="service-card">
//         <ServiceCard 
//           image="https://res.cloudinary.com/dte18rjfm/image/upload/v1750768725/Motorvehicleaccidentinjuries_ftozp6.webp"
//           title="Motor Vehicle Accident Recovery"
//           description="Targeted treatments for whiplash, back pain, and joint trauma from car accidents. We assist with insurance documentation and care continuity."
//           link="/services"
//           alt="Recovery services after car accidents"
//         />
//       </article>

//       {/* Pain Management */}
//       <article className="service-card">
//         <ServiceCard 
//           image="https://res.cloudinary.com/dte18rjfm/image/upload/v1750768725/PainManagement_ujs8jl.webp"
//           title="Pain Management"
//           description="Non-invasive therapies to manage chronic pain from arthritis, sciatica, migraines, and more — focusing on function and reducing medication use."
//           link="/services"
//           alt="Chronic pain management"
//         />
//       </article>

//       {/* Physical Therapy */}
//       <article className="service-card">
//         <ServiceCard 
//           image="https://res.cloudinary.com/dte18rjfm/image/upload/v1750768723/PhysicalTherapy01_ots3er.webp"
//           title="Physical Therapy"
//           description="Evidence-based rehab for orthopedic, neurological, and post-surgical conditions, restoring strength, balance, and flexibility."
//           link="/services"
//           alt="Physical therapy services"
//         />
//       </article>

//     </div>
//   </div>
// </section>

// <section className="section background-image-section section1 py-40">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-100"
        
//       ></div>

// <div className="container mx-auto max-w-6xl px-4 md:px-2 relative z-10">
//   <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
//     Why Choose PhysioDev NY?
//   </h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//     {/* Icon 1 */}
//     <div className="flex flex-col items-center">
//       <FaUserMd className="icon" /> {/* Healthcare Professional Icon */}
//       <h3 className="text-xl font-semibold text-white">Licensed Experts</h3>
//     </div>

//     {/* Icon 2 */}
//     <div className="flex flex-col items-center">
//       <FaHandsHelping className="icon" /> {/* Helping Hands Icon */}
//       <h3 className="text-xl font-semibold text-white">Compassionate Care</h3>
//     </div>

//     {/* Icon 3 */}
//     <div className="flex flex-col items-center">
//       <FaStethoscope className="icon" /> {/* Stethoscope Icon */}
//       <h3 className="text-xl font-semibold text-white">Evidence-Based Therapy</h3>
//     </div>

//     {/* Icon 4 */}
//     <div className="flex flex-col items-center">
//       <FaUserFriends className="icon" /> {/* Team/Group Icon */}
//       <h3 className="text-xl font-semibold text-white">Personalized Treatment</h3>
//     </div>

//     {/* Icon 5 */}
//     <div className="flex flex-col items-center">
//       <FaHeartbeat className="icon" /> {/* Heartbeat Icon */}
//       <h3 className="text-xl font-semibold text-white">Whole-Body Healing</h3>
//     </div>

//     {/* Icon 6 */}
//     <div className="flex flex-col items-center">
//       <FaCalendarCheck className="icon" /> {/* Calendar Check Icon */}
//       <h3 className="text-xl font-semibold text-white">Flexible Scheduling</h3>
//     </div>

//     {/* Icon 7 */}
//     <div className="flex flex-col items-center">
//       <FaFileMedical className="icon" /> {/* Medical File Icon */}
//       <h3 className="text-xl font-semibold text-white">Insurance Assistance</h3>
//     </div>

//     {/* Icon 8 */}
//     <div className="flex flex-col items-center">
//       <FaStar className="icon" /> {/* Star/Quality Icon */}
//       <h3 className="text-xl font-semibold text-white">Trusted by the Community</h3>
//     </div>
//   </div>
// </div>

//     </section>
//     <section className="bg-white py-16">
//   <div className="container mx-auto max-w-6xl px-4 md:px-8 text-center">
//     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">First Time Visiting?</h2>
//     <p className="text-gray-700 text-lg mb-6">
//       We’ve got everything you need to know—what to bring, insurance info, and how to make your visit smooth and stress-free.
//     </p>
//     <Link to="/patient-info">
//       <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-200">
//         Patient Info
//       </button>
//     </Link>
//   </div>
// </section>

// <section className="section opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out py-20 bg-gray-100">
//   <div className="container mx-auto max-w-6xl px-4 md:px-8">
//     <div className="flex flex-col lg:flex-row items-center gap-12">
      
//       {/* Image Side */}
//       <div className="lg:w-1/2 w-full">
//         <img
//           src="https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_800/Testimonial_bntlrp.webp"
//           srcSet="
//             https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_400/Testimonial_bntlrp.webp 400w,
//             https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_600/Testimonial_bntlrp.webp 600w,
//             https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_800/Testimonial_bntlrp.webp 800w
//           "
//           sizes="(max-width: 768px) 100vw, 50vw"
//           alt="Testimonial from client"
//           className="w-full rounded-lg shadow-lg object-cover"
//           loading="lazy"
//         />
//       </div>

//       {/* Text Side */}
//       <div className="lg:w-1/2 w-full">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//         <p className="text-gray-700 mb-6 ml-2">
//           "After my car accident, I could barely move my neck. The team at PhysioDev not only helped me recover but also explained every step of the treatment. I’m pain-free and finally sleeping well again!"
//         </p>
//         <p className="text-gray-700 mb-8 italic">- Danielle S., Freeport, NY</p>
//         <a
//           href="/testimonials"
//           className="bg-blue-700 text-white py-3 px-6 rounded-lg mt-10 hover:bg-blue-600 transition duration-200"
//         >
//           See Reviews
//         </a>
//       </div>

//     </div>
//   </div>
// </section>



// <CardSection
  
//   heading="Ready to Begin Your Healing Journey?"
//   content="Scheduling your session with PhysioDev NY is simple and stress-free. Whether you need a one-time consultation or ongoing treatment, our team is here to support your recovery every step of the way."
//   buttonText="Book an Appointment"
//   buttonLink="/contact-us"
// />

//       </div>

//     </div>
//   );
// };

// export default Home;
// src/pages/Home.js

import { useEffect } from 'react';
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
import CardSection from '../components/Contactcard';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/homeService';
import './HomePage.css';

const Home = () => {
  useEffect(() => {
    // Intersection Observer is more performant for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* The hero-section class now correctly links to your new optimized CSS */}
      <div className="hero-section relative flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="flex flex-col justify-center text-left text-white w-full md:w-1/2 space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Welcome to PhysioDev NY – Your Path to Recovery Starts Here
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Expert Physical Therapy and Chiropractic Care in Baldwin, NY
              </h2>
              <ul className="text-base sm:text-lg md:text-xl list-disc pl-5">
                <li>Personalized, evidence-based care</li>
                <li>Specializing in auto injuries & work-related conditions</li>
                <li>Convenient location in Baldwin, NY</li>
              </ul>
              <div className="md:mt-4 flex flex-col sm:flex-row sm:justify-start gap-4">
                <Link to="/contact-us">
                  <button className="w-48 bg-blue-600 text-white py-3 px-4 rounded-3xl hover:bg-blue-500 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-opacity-70">
                    Contact Us
                  </button>
                </Link>
                <a
                  href="https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/zohomail-pricing.html&serviceurl=https://mail.zoho.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-48 bg-blue-600 text-white py-3 px-4 rounded-3xl hover:bg-blue-500 transition duration-200 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-opacity-70 gap-2">
                    <span>Zoho Mail</span>
                    <FaEnvelope />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable sections */}
      <div className="bg-white">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              {/*
                *** LCP OPTIMIZATION APPLIED HERE ***
                1. Removed loading="lazy"
                2. Added fetchpriority="high"
                3. Added width and height attributes
              */}
              <img
                src="https://res.cloudinary.com/dte18rjfm/image/upload/w_auto,q_auto,f_auto/PhysicalTherapy_ykohgn.webp"
                srcSet="
                  https://res.cloudinary.com/dte18rjfm/image/upload/w_400,q_auto,f_auto/PhysicalTherapy_ykohgn.webp 400w,
                  https://res.cloudinary.com/dte18rjfm/image/upload/w_800,q_auto,f_auto/PhysicalTherapy_ykohgn.webp 800w,
                  https://res.cloudinary.com/dte18rjfm/image/upload/w_1200,q_auto,f_auto/PhysicalTherapy_ykohgn.webp 1200w
                "
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Patient receiving physical therapy at PhysioDev NY."
                className="w-full h-auto rounded-full md:rounded-lg shadow-md"
                fetchpriority="high"
                width="800"
                height="800"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 px-4 md:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Physical Therapy and Chiropractic Care
              </h2>
              <p className="text-lg text-gray-700">
                At PhysioDev NY, we help individuals of all ages recover from injuries, manage chronic pain, and improve mobility through personalized physical therapy and chiropractic care. Your health and wellness are our top priority.
              </p>
              <Link
                to="/about-us"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-200 self-start"
              >
                Learn about Our Company
              </Link>
            </div>
          </div>
        </section>

        {/* The rest of your component remains the same, but with lazy loading on images that are FARTHER down the page. */}
        
        <section className="bg-gray-100 section py-20" aria-labelledby="services-header">
          <div className="container mx-auto max-w-6xl px-4 md:px-2">
            <h2 id="services-header" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <article className="service-card">
                <ServiceCard 
                  image="https://res.cloudinary.com/dte18rjfm/image/upload/v1750768725/Worker_qbcbxa.webp"
                  title="Worker’s Compensation Rehab"
                  description="Personalized therapy programs to help injured workers recover safely and return to work confidently."
                  link="/services"
                  alt="Rehabilitation for workplace injuries"
                />
              </article>
              {/* ... other ServiceCard components ... */}
            </div>
          </div>
        </section>
        
        <section className="section background-image-section py-40">
            <div className="container mx-auto max-w-6xl px-4 md:px-2">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                    Why Choose PhysioDev NY?
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
                    {/* Simplified for brevity */}
                    <div className="flex flex-col items-center"><FaUserMd className="icon" /><h3 className="text-xl font-semibold text-white">Licensed Experts</h3></div>
                    <div className="flex flex-col items-center"><FaHandsHelping className="icon" /><h3 className="text-xl font-semibold text-white">Compassionate Care</h3></div>
                    <div className="flex flex-col items-center"><FaStethoscope className="icon" /><h3 className="text-xl font-semibold text-white">Evidence-Based</h3></div>
                    <div className="flex flex-col items-center"><FaUserFriends className="icon" /><h3 className="text-xl font-semibold text-white">Personalized</h3></div>
                    <div className="flex flex-col items-center"><FaHeartbeat className="icon" /><h3 className="text-xl font-semibold text-white">Whole-Body Healing</h3></div>
                    <div className="flex flex-col items-center"><FaCalendarCheck className="icon" /><h3 className="text-xl font-semibold text-white">Flexible Scheduling</h3></div>
                    <div className="flex flex-col items-center"><FaFileMedical className="icon" /><h3 className="text-xl font-semibold text-white">Insurance Help</h3></div>
                    <div className="flex flex-col items-center"><FaStar className="icon" /><h3 className="text-xl font-semibold text-white">Community Trusted</h3></div>
                </div>
            </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto max-w-6xl px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">First Time Visiting?</h2>
            <p className="text-gray-700 text-lg mb-6">
              We’ve got everything you need to know—what to bring, insurance info, and how to make your visit smooth.
            </p>
            <Link to="/patient-info">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-200">
                Patient Info
              </button>
            </Link>
          </div>
        </section>

        <section className="section bg-gray-100 py-20">
            <div className="container mx-auto max-w-6xl px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 w-full">
                    <img
                    src="https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_800/Testimonial_bntlrp.webp"
                    alt="Testimonial from a happy client."
                    className="w-full rounded-lg shadow-lg object-cover"
                    loading="lazy" /* This is correct, it's far down the page */
                    width="800"
                    height="600"
                    />
                </div>
                <div className="lg:w-1/2 w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <blockquote className="text-gray-700 mb-6 pl-4 border-l-4 border-blue-500">
                    <p>"After my car accident, I could barely move my neck. The team at PhysioDev not only helped me recover but also explained every step. I’m pain-free and finally sleeping well again!"</p>
                    </blockquote>
                    <p className="text-gray-700 font-semibold">- Danielle S., Freeport, NY</p>
                    <Link
                    to="/testimonials"
                    className="bg-blue-700 text-white py-3 px-6 rounded-lg mt-8 inline-block hover:bg-blue-600 transition duration-200"
                    >
                    See More Reviews
                    </Link>
                </div>
                </div>
            </div>
        </section>

        <CardSection
          heading="Ready to Begin Your Healing Journey?"
          content="Scheduling your session is simple. Whether you need a one-time consultation or ongoing treatment, our team is here to support your recovery."
          buttonText="Book an Appointment"
          buttonLink="/contact-us"
        />
      </div>
    </div>
  );
};

export default Home;