const FormacionItem = ({año, institucion, titulo, descripcion}) => {
    return (
        <ol className="flex flex-col md_flex-row relative max-w-screen-lg mx-auto p-4 justify-center w-full h-full text-white">
            <li className="text-[#fff]">
                <p className="text-lg mt-5 p-2 font-semibold text-white bg-[#001b5e] rounded-md">{año}</p>
                <p className="text-lg m-1 font-semibold">{institucion}</p>
                <p className="text-lg m-1 font-semibold">{titulo}</p>
                <p className="m-1 font-normal">{descripcion}</p>
            </li>
        </ol>
    )
}

export default FormacionItem