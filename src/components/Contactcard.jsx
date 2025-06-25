import React from 'react';

const CardSection = ({
  backgroundImage = "https://res.cloudinary.com/dte18rjfm/image/upload/f_auto,q_auto,w_1600/contact_y2wjsr.webp",
  heading,
  content,
  buttonText,
  buttonLink,
  buttonColor = "bg-blue-900",
  buttonHoverColor = "hover:bg-blue-700",
}) => {
  return (
    <section className="transition-all duration-700 ease-in-out py-10">
      <div className="container mx-auto max-w-6xl px-4 md:px-2 md:py-4">
        <div className="relative rounded-lg overflow-hidden min-h-[250px] flex items-center justify-center">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            aria-label="Contact background"
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content - Centered */}
          <div className="relative z-10 text-white text-center px-4 md:px-12 md:py-1 py-3 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
            <p className="mb-6">{content}</p>
            <a 
              href={buttonLink}
              className={`${buttonColor} text-white py-3 px-6 rounded-lg ${buttonHoverColor} transition duration-200 inline-block`}
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
