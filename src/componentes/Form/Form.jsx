import { Button } from "../Button/Button";
import { Input } from "../Inpunt/Input";
import { Subtitulo } from "../Subtitulo/Subtitulo";

export const Form = () => {
  return (
    <div className="formulario container flex justify-center ">
      <form action="" className="flex w-full max-w-sm space-x-3" id="respuesta">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-[#535353] rounded-lg shadow">
          <Subtitulo value="Contact us!" className="mb-6 text-3xl font-light text-center text-white"/>

          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto ">
            <Input inputType={"email"} nameType={"email"} className="rounded-sm" />
            <Input inputType={"text"} nameType={"Nombre"} className="rounded-sm"/>
            <Input inputType={"text"} nameType={"Mensaje"} className="rounded-sm"/>
            <Input inputType={"number"} nameType={"Telefono"} className="rounded-sm"/>


            <Button type={"submit"} value={"Send"} className="text-white rounded-lg bg-[#564dfb] hover:bg-[#726AFF]" />
          </div>
        </div>
      </form>
    </div>
  );
};
