import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import { FaQuoteLeft } from 'react-icons/fa';
import './TestimonialPage.css'; 
import CardSection from "../components/Contactcard";
import abstract from '../assets/abstract.webp';
const testimonials = [
  {
    text: "After my car accident, I could barely move my neck. The team at PhysioDev not only helped me recover but also explained every step of the treatment. I’m pain-free and finally sleeping well again!",
    author: "Danielle S., Freeport, NY"
  },
  {
    text: "They truly care about their patients. I came in with chronic back pain from years of construction work. Their physical therapy and chiropractic care changed my life.",
    author: "Kevin M., Baldwin, NY"
  },
  {
    text: "This clinic goes above and beyond. The front desk was helpful with my insurance, and the therapists were kind, patient, and extremely knowledgeable.",
    author: "Marisol T., Hempstead, NY"
  },
  {
    text: "I was nervous about starting therapy after knee surgery, but everyone made me feel comfortable right away. I’m now back to walking and even jogging again!",
    author: "James P., Oceanside, NY"
  }
];

const TestimonialPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className="max-w-7xl mt-32 mb-0 mx-auto py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl border-blue-700 border-x-4 bg-gray-200 my-2 mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-12">What Our Clients Say</h1>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 text-center">
            <FaQuoteLeft className="mx-auto text-6xl text-blue-600 mb-4" />
            <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.text}"</p>
            <p className="text-md font-semibold text-gray-900">— {testimonial.author}</p>
          </div>
        ))}
      </Slider>
      <CardSection
  backgroundImage={abstract} // Background image for the section
  heading="Send Us Review"
  content="If you have anything to tell the world about us , please click below."
  buttonText="click Here"
  buttonLink="/contact-us" // This will open the default mail client
/>
    </div>
  );
};

export default TestimonialPage;
