import React from 'react';
import PropTypes from 'prop-types';

const PersonalInfo = ({ name, surname, email, linkedin, phone, location, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md p-6 m-5 flex items-center">
    <div className="mr-6">
      <img src={imageSrc} className="w-32 h-32 rounded-full object-cover" />
    </div>
    <div>
      <h2 className="text-lg font-medium text-gray-900">{name} {surname}</h2>
      <p className="text-sm font-medium text-gray-600">{location}</p>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-600">Contact Information</h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500"><span className="font-medium">Email:</span> {email}</p>
          <p className="text-sm text-gray-500"><span className="font-medium">Phone:</span> {phone}</p>
          <p className="text-sm text-gray-500"><span className="font-medium">LinkedIn:</span> <a href={linkedin} className="text-blue-600">{linkedin}</a></p>
        </div>
      </div>
    </div>
  </div>
);

/*PersonalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};*/

export default PersonalInfo;
