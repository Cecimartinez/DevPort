import { FormLogin } from "./Components/FormLogin/FormLogin";

export const Login = () => {
  return (
    <div id="login" className="flex items-center justify-center h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <FormLogin />
        </section>
      </div>
    </div>
  );
};
