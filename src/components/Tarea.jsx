import { formatearFecha } from "../helpers/formatearFecha"

const Tarea = ({ tarea }) => {

    const { nombre, descripcion, prioridad, fechaEntrega, estado, _id } = tarea

    return (
        <div className="border-b p-5 flex justify-between items-center">
            {/* TODO: Ver botones en responsive */}
            <div className="">
                <p className="mb-1 text-xl">{nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
                <p className="mb-1 text-xl">{formatearFecha(fechaEntrega)}</p>
                <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
            </div>

            <div className="flex gap-2">
                <button
                    className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded"
                >
                    Editar
                </button>

                {estado ? (
                    <button
                        className="bg-green-600 px-4 py-3 text-white uppercase font-bold text-sm rounded"
                    >
                        Completa
                    </button>
                ) : (
                    <button
                        className="bg-gray-600 px-4 py-3 text-white uppercase font-bold text-sm rounded"
                    >
                        Incompleta
                    </button>
                )}





                <button
                    className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Tarea