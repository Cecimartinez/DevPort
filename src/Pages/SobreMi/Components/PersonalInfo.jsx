function PersonalInfo(props) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{props.name}</h2>
      <p className="text-gray-700 text-base mb-2">Edad: {props.age}</p>
      <p className="text-gray-700 text-base mb-2">Locación: {props.location}</p>
    </div>
  );
}

export default PersonalInfo;
