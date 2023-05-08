import { FormContact } from "./Components/FormContact/FormContact";

export const Contacto = () => {
  return (
    <div
  id="contacto"
  className="container mx-auto px-4 max-w-[1040px] m-auto md:pl-20 p-4 justify-center flex"
  style={{ overflowY: "auto", height: "500px" }}
>
  <div className="w-full max-w-lg py-4 px-5 rounded-md">
    <FormContact />
  </div>
</div>

  );
};
