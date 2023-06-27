import { Outlet } from "react-router-dom";

const PersonalInfo = ({ name, email, linkedin, phone, location, imageSrc, professionalProfile, strengths, languages }) => (
  <div className="bg-[#212224] rounded-lg shadow-md p-4 my-16 sm:flex sm:items-center text-white flex items-center justify-center">
    <div className="sm:mr-6 mb-4 sm:mb-0 flex-shrink-0">
      <img src={imageSrc} className="w-40 h-40 object-cover rounded-full" alt={`Profile of ${name}`} />
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2 sm:mb-0 text-[#8269ff]">{name} </h2>
      <p className="text-base font-medium mb-2">{location}</p>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-[#c3b7ff]">Información de Contacto</h3>
        <div className="mt-2">
          <p className="text-base">
            <span className="font-medium">Email:</span> {email}
          </p>
          <p className="text-base">
            <span className="font-medium">Teléfono:</span> {phone}
          </p>
          <p className="text-base">
            <span className="font-medium">LinkedIn:</span>{" "}
            <a href={linkedin} className="text-[#3ef2ff]">
              {linkedin}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-[#c3b7ff]">Perfil Profesional</h3>
        <p className="text-base">{professionalProfile}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-[#c3b7ff]">Fortalezas</h3>
        <ul className="list-disc list-inside text-base">
          <li>{strengths}</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-[#c3b7ff]">Idiomas</h3>
        <ul className="list-disc list-inside text-base">
          {languages.map((language) => (
            <li key={language.language}>{language.language}</li>
          ))}
        </ul>
      </div>
    </div>
    <Outlet />
  </div>
);

export default PersonalInfo;
