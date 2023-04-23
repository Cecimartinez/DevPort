import PersonalInfo from "./Components/PersonalInfo";


export const SobreMi = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PersonalInfo name="John Doe" age="27" location="New York" />
      <PersonalInfo name="Jane Smith" age="35" location="Los Angeles" />
    </div>
  );
};
