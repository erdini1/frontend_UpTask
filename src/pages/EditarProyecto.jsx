import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import FormularioProyecto from "../components/FormularioProyecto"

const EditarProyecto = () => {

    const { obtenerProyecto, proyecto, cargando } = useProyectos()
    const { id } = useParams()
    const { nombre, cliente, fechaEntrega, descripcion } = proyecto

    useEffect(() => {
        obtenerProyecto(id)
    }, [])

    // TODO: Agregar pulse de tailwindcss o skeleton loaders en el cargando
    if (cargando) return "Cargando..."

    return (
        <>
            <h1 className="text-2xl font-bold">Editar Proyecto: <span className="font-black text-4xl">{nombre}</span></h1>

            <div className="mt-10 flex justify-center">
                <FormularioProyecto />
            </div>
        </>
    )
}

export default EditarProyecto