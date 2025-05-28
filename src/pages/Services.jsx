import React from 'react';
import CardSection from '../components/Contactcard';
import abstract from '../assets/abstract.webp';

const servicesData = [
  {
    title: "Worker's Compensation Rehab",
    description: "Personalized therapy programs to help injured workers recover safely, return to work confidently, and navigate the workers' comp process. We work closely with case managers, employers, and physicians.",
    imageUrl: "https://media.istockphoto.com/id/1184631592/photo/male-patient-takes-first-steps-using-orthopedic-parallel-bars.jpg?s=612x612&w=0&k=20&c=mfSpYrxDdIB-_uxHFY9oOmI_nOpnpTdXkPFwzaJbPMU=",
    color: "bg-blue-100",
    rotate: "-rotate-1"
  },
  {
    title: "Motor Vehicle Accident Recovery",
    description: "Targeted treatments for injuries like whiplash, back pain, neck strain, and joint trauma resulting from car accidents. We assist with insurance documentation and care continuity.",
    imageUrl: "https://curezonephysiotherapy.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-17-at-12.11.43-jpeg.webp",
    color: "bg-blue-100",
    rotate: "rotate-1"
  },
  {
    title: "Pain Management",
    description: "Non-invasive therapies to reduce chronic pain symptoms caused by arthritis, disc issues, sciatica, migraines, or fibromyalgia — focusing on functional improvements and reduced reliance on medications.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYj0EthGU7bqj7JVInd9AulxFDgzbgv0E1w&s",
    color: "bg-blue-100",
    rotate: "-rotate-2"
  },
  {
    title: "Physical Therapy",
    description: "Evidence-based rehabilitation for orthopedic, neurological, and post-surgical conditions. We emphasize restoring strength, balance, and flexibility through guided movement and exercises.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    color: "bg-blue-100",
    rotate: "rotate-2"
  },
  {
    title: "Chiropractic Care",
    description: "Chiropractic adjustments, spinal manipulation, and soft tissue work to relieve pain, correct alignment, and support your nervous system. This complements physical therapy and promotes whole-body healing.",
    imageUrl: "https://leeds-chiropractic.co.uk/wp-content/uploads/2024/07/cropped-shot-of-chiropractor-massaging-back-of-pat-2023-11-27-05-24-25-utc.webp",
    color: "bg-blue-100",
    rotate: "-rotate-1"
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pb-16 pt-28" aria-labelledby="services-header">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 id="services-header" className="text-5xl font-bold text-gray-900 font-serif mb-4 mt-3">Our Service Areas</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive care solutions tailored to your recovery needs and health goals
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
  {servicesData.map((service, index) => (
    <div 
      key={index}
      className={`relative group ${index === servicesData.length - 1 ? 'md:col-span-2' : ''}`}
    >
      {/* Image section - top half */}
      <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-xl shadow-lg">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>
      
      {/* Text content - bottom half */}
      <div className={`relative ${service.color} p-8 rounded-b-xl shadow-lg -mt-4 z-10 ${index === servicesData.length - 1 ? 'max-w-3xl mx-auto' : ''}`}>
        {/* Sticky note effect */}
        <div className={`absolute -top-4 left-8 w-16 h-8 ${service.color} ${service.rotate} shadow-md`}></div>
        <div className={`absolute -top-4 right-8 w-16 h-8 ${service.color} ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} shadow-md`}></div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.description}</p>
        
        <div className="absolute bottom-4 right-4">
          <div className={`w-12 h-8 ${service.color} ${service.rotate} shadow-md`}></div>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>

      {/* Contact Section */}
      <div className="mt-24">
        <CardSection
          backgroundImage={abstract}
          heading="Begin Your Healing Journey"
          content="Contact us today to schedule an evaluation and discover how our specialized therapies can help you recover and thrive."
          buttonText="Schedule Consultation"
          buttonLink="contact-us"
        />
      </div>
    </section>
  );
};

export default ServicesPage;