import FormacionItem from "./FormacionItem"

const FormacionComponente = () => {
    const data = [
        {
            año: "2021 - 2024",
            institucion: 'UADE',
            titulo: 'Lic. en Sistemas',
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum praesentium unde aliquam neque minus facilis odio, odit, cupiditate fugiat porro, aliquid deleniti doloremque facere ullam est possimus. Sunt, vel quisquam."
        },
        {
            año: "2015 - 2020",
            institucion: 'Maria Montessori School',
            titulo: 'Bilingue - Bachiller Comunicación',
            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum praesentium unde aliquam neque minus facilis odio, odit, cupiditate fugiat porro, aliquid deleniti doloremque facere ullam est possimus. Sunt, vel quisquam."
        }
    ]

    return (
        <div id='formacion' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl text-white font-bold border-b-4 border-[#564dfb] p-2 inline">Formación</h1>
            {data.map((item, idx)=>(
                <FormacionItem 
                    key={idx} 
                    año={item.año} 
                    institucion={item.institucion} 
                    titulo={item.titulo} 
                    descripcion={item.descripcion}
                />
            ))}
        </div>
    )
}

export default FormacionComponente 