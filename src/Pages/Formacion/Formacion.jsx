import FormacionItem from "./Components/FormacionItem";

export const Formacion = () => {
  return (
    <div className="container mx-auto px-4  max-w-[1040px] m-auto  h-full overflow-y-auto " >
      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
        imagen={<span class="material-symbols-outlined">work</span>}
      />

      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
        imagen={<span class="material-symbols-outlined">school</span>}
      />

      <FormacionItem
        año=" 2023 - Present"
        institucion=" UADE "
        titulo=" Lic. en Sistemas "
      />
    </div>
  );
};
