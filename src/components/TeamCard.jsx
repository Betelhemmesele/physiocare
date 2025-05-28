import React from 'react';

const TeamCard = ({ name, title, imageUrl, experience, specialty }) => {
  return (
    <div className="bg-gray-100 border-l-4 border-blue-400 shadow-lg rounded-lg p-5 transform transition-transform hover:scale-105 rotate-[-1deg]">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md shadow mb-4"
      />
      <h3 className="text-xl font-bold text-orange-900">{name}</h3>
      <p className="text-sm text-gray-700 font-medium">{title}</p>
      <p className="text-sm text-gray-600 mt-2">{experience}</p>
      <p className="text-sm text-gray-600 italic">{specialty}</p>
    </div>
  );
};

export default TeamCard;
