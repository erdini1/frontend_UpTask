import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import ModalFormularioTarea from "../components/ModalFormularioTarea"
// import SkeletonLoader from "../components/SkeletonLoader"

const Proyecto = () => {

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
            <div className="flex justify-between">
                <h1 className="font-black text-4xl">{nombre}</h1>

                <div className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>

                    <Link
                        to={`/proyectos/editar/${id}`}
                        className="uppercase font-bold"
                    >Editar</Link>
                </div>

            </div>
            <button
                type="button"
                className="text-sm p-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-green-400 text-white text-center mt-5 flex gap-2 items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>

                Nueva Tarea
            </button>

            <ModalFormularioTarea />

        </>
    )
}

export default Proyecto