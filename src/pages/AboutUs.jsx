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

        {/* About Us Section with background */}
        <section
          className="relative w-full rounded-xl text-white flex flex-col items-center pb-10 md:pb-0 min-h-[700px] md:min-h-[850px]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dte18rjfm/image/upload/v1750768723/contact_y2wjsr.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>

          {/* About Us Content */}
          <div className="relative z-10 bg-black bg-opacity-60 rounded-xl p-6 sm:p-8 md:p-10 max-w-4xl mx-4 mt-10 sm:mt-20">
            <h2 id="about-us-header" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Committed to Compassionate Care
            </h3>
            <p className="text-base sm:text-lg mb-4">
              PhysioDev NY is a family-friendly clinic built on the principles of personalized care,
              evidence-based practice, and long-term wellness.
            </p>
            <p className="text-base sm:text-lg mb-4">
              Our team brings together physical therapists and chiropractors who are deeply invested in your
              recovery and quality of life.
            </p>
            <p className="text-base sm:text-lg">
              We don’t believe in one-size-fits-all therapy. Instead, we focus on individualized treatment
              plans that target your specific needs.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative z-10 w-full px-4 md:px-0 mt-10 md:mt-0 md:absolute md:-bottom-16 md:right-6 md:w-[90%] lg:max-w-2xl">
            <div className="bg-white bg-opacity-80 text-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-4">
                Our mission at PhysioDev NY is to enhance your quality of life by offering expert physical
                therapy and chiropractic care that is compassionate, customized, and effective.
              </p>
              <p className="mb-2">
                Curious about our treatment options? Contact us to find out how we can help you recover and
                thrive.
              </p>
              <p className="mb-4">
                Need guidance on post-injury rehab or chronic pain management? Let’s talk about how we can
                personalize your care plan.
              </p>
              <a
                href="/contact-us"
                className="text-lg font-medium text-blue-800 cursor-pointer hover:underline"
              >
                Contact us now to learn more!
              </a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full text-center px-4">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 text-gray-900 border mt-24 sm:mt-20 border-blue-200">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-serif">Our Team</h2>
            <h4 className="text-lg sm:text-xl font-medium mb-4">Skilled. Compassionate. Dedicated.</h4>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              Our licensed professionals are more than therapists — they’re partners in your recovery. Every member of our team has extensive experience in their field and stays up to date with the latest therapeutic techniques.
            </p>
          </div>

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
