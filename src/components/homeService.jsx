import React from 'react';

const ServiceCard = ({ image, title, description, link, alt }) => {
  return (
    <div className="bg-gray-200 flex flex-col rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
      <img
        src={`${image}?f_auto&q_auto&w=600`}
        srcSet={`
          ${image}?f_auto&q_auto&w=400 400w,
          ${image}?f_auto&q_auto&w=600 600w,
          ${image}?f_auto&q_auto&w=800 800w
        `}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        alt={alt || title}
        className="w-full h-64 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-2xl text-blue-900 font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a 
          href={link} 
          className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mt-auto"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
