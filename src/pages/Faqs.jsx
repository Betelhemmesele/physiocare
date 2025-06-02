import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import CardSection from '../components/Contactcard';
import abstract from '../assets/abstract.webp';
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleFaq}>
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? <AiOutlineMinus size={24} className="text-blue-900" /> : <AiOutlinePlus size={24} className="text-blue-900" />}
      </div>
      {isOpen && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: 'What services does PhysioDev NY provide?',
      answer: 'We offer comprehensive physical therapy and chiropractic care, including post-injury rehabilitation, chronic pain management, sports injury therapy, and personalized wellness plans.'
    },
    {
      question: 'Do I need a referral to start treatment?',
      answer: 'No, a referral is not required to begin treatment at PhysioDev NY. However, some insurance plans may require one for coverage. Contact us or your insurance provider for more information.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'During your first visit, our specialists will perform a detailed assessment, discuss your medical history, and create a customized treatment plan tailored to your recovery goals.'
    },
    {
      question: 'Are your treatment plans personalized?',
      answer: 'Absolutely. We believe in individualized care. Each patient receives a unique treatment plan based on their condition, goals, and progress.'
    },
    {
      question: 'Do you treat sports-related injuries?',
      answer: 'Yes, we specialize in treating a wide range of sports injuries, including sprains, strains, joint issues, and recovery programs to get you back to peak performance.'
    },
    {
      question: 'Is PhysioDev NY covered by my insurance?',
      answer: 'We accept many major insurance providers. Contact our office with your insurance details, and we’ll help you verify your coverage.'
    },
    {
      question: 'How long is each treatment session?',
      answer: 'Treatment sessions typically last between 30 to 60 minutes, depending on your needs and the therapy being provided.'
    },
    {
      question: 'Do you offer chiropractic adjustments?',
      answer: 'Yes, our licensed chiropractors offer safe and effective adjustments as part of a broader treatment plan focused on spinal health and pain relief.'
    },
    {
      question: 'Can I walk in without an appointment?',
      answer: 'Yes, we welcome walk-ins based on availability. However, we recommend scheduling in advance to ensure timely care.'
    },
    {
      question: 'What should I wear to my appointment?',
      answer: 'Wear comfortable, loose-fitting clothing that allows for movement. Athletic wear is often ideal for therapy sessions.'
    },
    {
      question: 'Is the clinic accessible for patients with mobility issues?',
      answer: 'Yes, we have on-site parking, a handicap-accessible entrance, and facilities designed to accommodate all mobility levels.'
    },
    {
      question: 'What are your office hours?',
      answer: 'Our hours are: Sunday 5:00 AM – 11:00 PM, Monday–Thursday 9:00 AM – 7:00 PM, Friday 10:00 AM – 6:00 PM, and Saturday 10:00 AM – 3:00 PM.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can call us at (516) 379-0000, email info@physiodevny.com, or use our online contact form to request an appointment.'
    },
    {
      question: 'Do you offer treatment for chronic pain?',
      answer: 'Yes, our team specializes in managing chronic conditions such as back pain, arthritis, fibromyalgia, and more through evidence-based therapeutic approaches.'
    },
    {
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Yes, if you need to cancel or reschedule, please notify us at least 24 hours in advance to avoid any cancellation fees and to help us accommodate others.'
    }
  ];
  
  return (
    <div>
      <div className="max-w-[1140px] mx-auto mt-32 mb-2 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center bg-gray-100 py-16 rounded-lg border-blue-700 border-x-2 mb-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to our FAQ page! Below, you’ll find answers to the most common questions about Royal Care Transportation. If you don’t see your question here, feel free to contact us directly.
      </p>
      </div>
      <div className='text-left'>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
    </div>
    <CardSection
    backgroundImage={abstract} // Background image for the section
    heading="Contact Us"
    content="For inquiries or to schedule a ride, please contact us at (516) 379-0000 or email us at info@physiodevny.com. We look forward to serving you!"
    buttonText="Contact Us"
    buttonLink="contact-us" // This will open the default mail client
  />
    </div>
  );
};

export default FaqSection;
