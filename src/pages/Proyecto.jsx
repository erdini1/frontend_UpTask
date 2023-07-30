import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"

const Proyecto = () => {

    const { obtenerProyecto, proyecto, cargando } = useProyectos()
    const { id } = useParams()
    const { nombre, cliente, fechaEntrega, descripcion } = proyecto

    useEffect(() => {
        obtenerProyecto(id)
    }, [])

    return (
        // TODO: Agregar pulse de tailwindcss o skeleton loaders
        cargando ? "Cargando..." : (
            <div className="">
                <h1 className="font-black text-4xl">{nombre}</h1>
            </div>
        )
    )
}

export default Proyecto