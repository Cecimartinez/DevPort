import { ImageComponent } from "../../componentes";
import { FormContact } from "./Components/FormContact/FormContact";

export const Contacto = () => {
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="form-container justify-center flex content-center items-center">
        <div>
          <FormContact className={""} />
          <div className="flex justify-center">
            <ImageComponent
              className={`w-20, h-20 `}
              href=""
              src="../../img/cont.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
