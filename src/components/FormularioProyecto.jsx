import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"

const FormularioProyecto = () => {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaEntrega, setFechaEntrega] = useState("")
    const [cliente, setCliente] = useState("")

    const params = useParams()
    const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos()

    useEffect(() => {
        if (params.id) {
            setNombre(proyecto.nombre)
            setDescripcion(proyecto.descripcion)
            setFechaEntrega(proyecto.fechaEntrega?.split("T")[0])
            setCliente(proyecto.cliente)
        }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault()

        if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
            mostrarAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return
        }

        // Pasar los datos hacia el provider
        await submitProyecto({ nombre, descripcion, fechaEntrega, cliente })

        setNombre("")
        setDescripcion("")
        setFechaEntrega("")
        setCliente("")
    }

    const { msg } = alerta

    return (

        <form
            className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
            onSubmit={handleSubmit}
        >

            {msg && <Alerta alerta={alerta} />}

            {/* TODO: pasar estos div/inputs a un componente y llamarlo con map */}
            <div className="mb-5">
                <label
                    htmlFor="nombre"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Nombre Proyecto
                </label>
                <input
                    type="text"
                    name=""
                    id="nombre"
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre del Proyecto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="descripcion"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Descripción
                </label>
                <textarea
                    name=""
                    id="descripcion"
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Descripción del Proyecto"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="fechaEntrega"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Fecha de entrega
                </label>
                <input
                    type="date"
                    name=""
                    id="fechaEntrega"
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fechaEntrega}
                    onChange={e => setFechaEntrega(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="cliente"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Nombre Cliente
                </label>
                <input
                    type="text"
                    name=""
                    id="cliente"
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Nombre del Cliente"
                    value={cliente}
                    onChange={e => setCliente(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value={params.id ? "Editar Proyecto" : "Crear Proyecto"}
                className="bg-green-600 w-full uppercase p-3 text-white font-bold rounded cursor-pointer hover:bg-green-700 transition-colors"
            />

        </form>
    )
}

export default FormularioProyecto