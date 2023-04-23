import React from 'react';
import PropTypes from 'prop-types';

const PersonalInfo = ({ name, surname, email, linkedin, phone, location, imageSrc, professionalProfile, strengths, languages }) => (
  <div className="bg-white rounded-lg shadow-md p-6 m-5 flex items-center text-black">
    <div className="mr-6">
      <img src={imageSrc} className="w-32 h-32 rounded-full object-cover" />
    </div>
    <div>
      <h2 className="text-lg font-medium ">{name} {surname}</h2>
      <p className="text-sm font-medium ">{location}</p>
      <div className="mt-4">
        <h3 className="text-m font-medium ">Contact Information</h3>
        <div className="mt-2">
          <p className="text-sm"><span className="font-medium">Email:</span> {email}</p>
          <p className="text-sm"><span className="font-medium">Phone:</span> {phone}</p>
          <p className="text-sm"><span className="font-medium">LinkedIn:</span> <a href={linkedin} className="text-blue-600">{linkedin}</a></p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-m font-medium ">Professional Profile</h3>
        <p className="text-sm ">{professionalProfile}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-m font-medium ">Strengths</h3>
        <ul className="list-disc list-inside text-sm ">
          {strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-m font-medium ">Languages</h3>
        <ul className="list-disc list-inside text-sm ">
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

PersonalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  professionalProfile: PropTypes.string.isRequired,
  strengths: PropTypes.arrayOf(PropTypes.string),
  languages: PropTypes.arrayOf(PropTypes.string),
};

export default PersonalInfo;
