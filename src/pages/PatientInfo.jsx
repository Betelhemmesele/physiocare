import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaFileAlt,FaShieldAlt, FaClock, FaHome } from 'react-icons/fa';

const PatientInfo = () => {
  return (
 
      <div className=" z-10 container mx-auto  max-w-6xl px-4  md:px-8">
        {/* Card container */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl my-32 overflow-hidden backdrop-filter backdrop-blur-sm">
          {/* Header section */}
          <div className="bg-blue-100 text-gray p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Patient Information
            </h1>
            <p className="text-blue-500 text-center max-w-2xl mx-auto">
              Everything you need to know for your visit with us
            </p>
          </div>

          {/* Content section */}
          <div className="p-6 md:p-8">
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <FaUserMd className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Preparing for Your Visit
                </h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-5 mb-8">
                <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-3">
                  <FaFileAlt className="text-blue-500 mr-2" />
                  Before You Arrive:
                </h3>
                <ul className="text-gray-700 space-y-3 pl-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Wear comfortable, loose-fitting clothes suitable for movement
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Bring a valid photo ID and insurance card
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Arrive 10–15 minutes early to complete any necessary forms
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5 mb-8">
                <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-3">
                  <FaShieldAlt className="text-blue-500 mr-2" />
                  Accepted Insurance Providers:
                </h3>
                <ul className="text-gray-700 space-y-3 pl-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Most major health plans accepted
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Worker's Comp and No-Fault (auto accident) coverage welcomed
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Call our office to verify your specific plan and coverage
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-3">
                  <FaClock className="text-blue-500 mr-2" />
                  Cancellation Policy:
                </h3>
                <p className="text-gray-700 pl-2">
                  Kindly notify us 24 hours in advance if you need to reschedule or cancel. 
                  This helps us accommodate other patients in need.
                </p>
              </div>
            </section>

            <div className="text-center mt-8">
              <Link to="/">
                <button className="flex items-center justify-center mx-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md">
                  <FaHome className="mr-2" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default PatientInfo;