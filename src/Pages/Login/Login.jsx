import { FormLogin } from "./Components/FormLogin/FormLogin";
export const Login = () => {
  return (
    <div id="login" className="flex items-center justify-center h-screen bg-gradient-to-br from-violet-600 to-teal-300 overflow-y-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg">
          <h1 id="title-login" className="text-center text-2xl  text-white font-black sm:text-4xl ">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <FormLogin />
        </section>
      </div>
    </div>
  );
};
