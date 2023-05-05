const FormacionItem = ({ año, institucion, titulo }) => {
  return (
    <div className=" rounded-lg x flex w-full justify-center items-center text-black h-full ">
      <section className="rounded-lg m-5 px-6 py-3 shadow-md flex items-center text-gray-600">
        <div className="flex">
          <p className="text-sm font-semibold p-2">{institucion}</p>
          <p className="text-sm font-semibold p-2">{titulo}</p>
          <p className="text-sm font-semibold py-2 px-2 border rounded-full  text-[#53f] ">{año}</p>
        </div>
      </section>
    </div>
  );
};
export default FormacionItem;
