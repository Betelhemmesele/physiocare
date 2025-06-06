import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Add CC email to form data
    const templateParams = {
      ...formData, // Includes name, email, message
      cc_email: 'physiomedical2270@gmail.com' // Adding CC email here
    };

    // EmailJS integration
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      templateParams,  // Send updated formData including CC email
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
   
      // Clear the form data
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Adjust the time as needed
    }, (err) => {
      setIsSubmitting(false);
      
      setError("Something went wrong. Please try again later.",err);
    });
    
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 mt-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center bg-gray-100 py-16 rounded-lg border-blue-700 border-x-2 mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’re here to help! If you have any questions, need assistance, or want to learn more about our services, please fill out the form below or reach out using the contact information.
        </p>
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mb-12 max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="shadow-lg p-6 border-blue-700 border-y-2 rounded-lg bg-white hover:shadow-xl transition-transform duration-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>

  <h3 className="text-xl font-semibold text-gray-900 mb-2">📍 Address</h3>
  <p className="text-lg text-gray-600 mb-4">2270 Grand Ave, Baldwin, NY 11510</p>

  <h3 className="text-xl font-semibold text-gray-900 mb-2">📞 Phone</h3>
  <p className="text-lg text-gray-600 mb-4">(516) 379-0000</p>

  <h3 className="text-xl font-semibold text-gray-900 mb-2">📠 Fax</h3>
  <p className="text-lg text-gray-600 mb-4">(516) 379-7919</p>

  <h3 className="text-xl font-semibold text-gray-900 mb-2">✉️ Gmail</h3>
  <p className="text-lg text-gray-600 mb-4">physiomedical2270@gmail.com</p>

  <h3 className="text-xl font-semibold text-gray-900 mb-2">🕒 Office Hours</h3>
  <p className="text-lg text-gray-600">
    Sunday: 5:00 AM – 11:00 PM<br />
    Monday – Thursday: 9:00 AM – 7:00 PM<br />
    Friday: 10:00 AM – 6:00 PM<br />
    Saturday: 10:00 AM – 3:00 PM
  </p>

  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">🚗 Parking</h3>
  <p className="text-lg text-gray-600">
    On-site parking available. Handicap accessible entrance.
  </p>
</div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg border-blue-700 border-y-2 hover:shadow-xl transition-transform duration-200">
          {isSubmitted && (
            <p className="text-center text-green-600 text-lg font-semibold mb-6">
              Your message has been sent successfully!
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className={`px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} 
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
