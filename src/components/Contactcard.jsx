import React from 'react';

const CardSection = ({
  backgroundImage = "https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_1600/contact_y2wjsr.webp",
  overlayColor = "bg-gray-900",
  overlayOpacity = "opacity-50",
  heading,
  content,
  buttonText,
  buttonLink,
  buttonColor = "bg-blue-900",
  buttonHoverColor = "hover:bg-blue-700",
}) => {
  return (
    <section className="section transition-all duration-700 ease-in-out py-10">
      <div className="container mx-auto max-w-6xl px-4 md:px-2">
        <div className="relative rounded-lg overflow-hidden min-h-[400px]">
          
          {/* Responsive Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            role="img"
            aria-label="Contact background"
          ></div>

          {/* Overlay */}
          <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 text-white flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
            <p className="mb-6 max-w-2xl">{content}</p>
            <a 
              href={buttonLink}
              className={`${buttonColor} text-white py-3 px-6 rounded-lg ${buttonHoverColor} transition duration-200`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
