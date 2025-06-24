import React from 'react';
import CardSection from '../components/Contactcard';
import TeamCard from '../components/TeamCard';
import './AboutUs.css';

const teamImages = [
  "https://res.cloudinary.com/dte18rjfm/image/upload/v1750768723/doc1_qibwza.webp",
  "https://res.cloudinary.com/dte18rjfm/image/upload/v1750768723/doc2_avre5y.webp",
  "https://res.cloudinary.com/dte18rjfm/image/upload/v1750768723/doc3_zstglg.webp",
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 pt-32 pb-0 px-4 md:px-12 lg:px-20" aria-labelledby="about-us-header">
      <div className="container mx-auto flex flex-col items-center justify-center max-w-full space-y-10">

        <section className="about-us-bg relative w-full rounded-xl text-white flex flex-col items-center pb-10 md:pb-0 min-h-[700px] md:min-h-[850px]">
          {/* About Us Content */}
          <div className="bg-black bg-opacity-60 rounded-xl p-6 sm:p-8 md:p-10 max-w-4xl mx-4 mt-10 sm:mt-20">
            {/* ...your text content */}
          </div>

          {/* Mission Card */}
          <div className="w-full px-4 md:px-0 mt-10 md:mt-0 md:absolute md:-bottom-16 md:right-6 md:w-[90%] lg:max-w-2xl z-10">
            {/* ...mission content */}
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full text-center px-4">
          {/* ...team header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
            {teamImages.map((imageUrl, index) => (
              <TeamCard
                key={index}
                name={`Dr. Jane Doe ${index + 1}`}
                title="Physical Therapist"
                imageUrl={imageUrl}
                experience="10+ Years Experience"
                specialty="Sports Rehab & Manual Therapy"
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <div className="w-full">
          <CardSection
            heading="Contact Us"
            content="Have questions or want to schedule an appointment? Reach out to us at (516) 379-0000 or email info@physiodevny.com. We look forward to helping you move forward!"
            buttonText="Contact Us"
            buttonLink="/contact-us"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;