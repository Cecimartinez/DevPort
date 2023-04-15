import { Input, Subtitulo, Button } from "../../../../componentes";

export const FormContact = () => {
  return (
    <div className="formulario container flex justify-center ">
      <form action="" className="flex w-full max-w-sm space-x-3" id="respuesta">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-[#535353] rounded-lg shadow">
          <Subtitulo
            value="Contact us!"
            className="mb-6 text-3xl font-light text-center text-white"
          />

          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto ">


            <Input
              inputType={"email"}
              nameType={"email"}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#535353] text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#564dfb] focus:border-transparent"
            />

            <Input
              inputType={"text"}
              nameType={"Nombre"}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#535353] text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#564dfb] focus:border-transparent"
            />
            <Input
              inputType={"text"}
              nameType={"Mensaje"}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#535353] text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#564dfb] focus:border-transparent"
            />
            <Input
              inputType={"number"}
              nameType={"Telefono"}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-[#535353] text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#564dfb] focus:border-transparent"
            />

            <Button
              type={"submit"}
              value={"Send"}
              className="text-white rounded-lg bg-[#564dfb] hover:bg-[#726AFF] w-full h-10"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
